
import React from "react";
// import "@testing-library/jest-dom/extend-expect"
import ReportCreate from "../../src/Components/Reports/ReportCreate";
import App from "../../src/Components/App";
import { render, act, fireEvent, screen,cleanup } from "@testing-library/react";
import reports from "../../src/api/reports";
import { LocalStorageMock,getLocalStorage,setLocalStorage } from '@react-mock/localstorage';
import {getDDMMYYYY} from "../../src/Utilities/TimeFormatter";
import renderWithRouter from '../setupTests';
import reports from "../mocks/reports";
jest.mock("../../src/api/reports");
const mockPostData = {
  report_date: new Date(),
  person_gender: 'נקבה'
};

afterEach(cleanup);

/**
 * @jest-environment jsdom
 */
//test without localStrogae location value
test.skip("render with empty location value", () => {
  const { history } = renderWithRouter(<ReportCreate />);
  expect(history.location.pathname).toEqual('/report/map');
})
test.skip("render with location value בורלא", () => {
  const { history } = renderWithRouter(<LocalStorageMock items={{ location:"בורלא 25, תל אביב" }}><ReportCreate /></LocalStorageMock>)
  expect(history.location.pathname).toEqual('/');
  expect(localStorage.getItem("location")).toBe("בורלא 25, תל אביב");
})
test.skip("render with location value מנחם בגין", () => {
  const { history } = renderWithRouter(<LocalStorageMock items={{ location:"מנחם בגין 25, תל אביב" }}><ReportCreate /></LocalStorageMock>)
  expect(history.location.pathname).toEqual('/');
  expect(localStorage.getItem("location")).toBe("מנחם בגין 25, תל אביב");
})
//minial change valid submittion
test("should watch input correctly", () => {
  const { container ,getByTestId} = render(<LocalStorageMock items={{ location:"בורלא 25, תל אביב" }}><ReportCreate/></LocalStorageMock>);
  
  const person_gender = container.querySelector(
    "input[name='person_gender']"
  );
  fireEvent.input(person_gender, {
    target: {
      value: mockPostData.person_gender
    }
  });
  await act(async () => {
    fireEvent.submit(container.querySelector('#submitBtn'));
  });
  expect(reports).toHaveBeenCalledWith(mockPostData); 
  expect(history.location.pathname).toEqual('/report/success' ||'/report/failure' );
})
//testing valid submission
test.skip("should watch input correctly", () => {
  const { container ,getByTestId} = render(<LocalStorageMock items={{ location:"בורלא 25, תל אביב" }}><ReportCreate/></LocalStorageMock>);
  const report_date = getByTestId("report-date").querySelector('input'); ;
  const person_gender = container.querySelector(
    "input[name='person_gender']"
  );
  fireEvent.change(report_date, {
    target: {
      value: mockPostData.report_date
    }
  });
  fireEvent.input(person_gender, {
    target: {
      value: mockPostData.person_gender
    }
  });
  const dateStr = getDDMMYYYY(mockPostData.report_date);
  expect(report_date.value).toEqual(dateStr);
  expect(person_gender.value).toEqual(mockPostData.person_gender);
});
test.skip('submit with default values (date,cloths colors) missing gender',()=>{
  
  fireEvent.submit(screen.getByRole("button"));
  

})
//#2 testing invalid submission - missing date
//#3 testing invalid submission - missing time
//#4 testing invalid submission - missing gender
//#5 testing invalid field - phone number
//#6 testing invalid field - date later than today
//#7 testing invalid field - datetime later than today
//#8 testing autocomplete - distress from general description box
//#9 testing distress inputText visiable only with isDistressed ischecked
//#10 test navbar href 






// test("should display correct error message for password miss match", async () => {
//   const { container } = render(<ResetPassword />);
//   const newPassword = container.querySelector(
//     "input[name='newPassword']"
//   );
//   const confirmNewPassword = container.querySelector(
//     "input[name='confirmNewPassword']"
//   );
//   const submitButton = container.querySelector(
//     "input[type='submit']"
//   );
//   fireEvent.input(newPassword, {
//     target: {
//       value: mockValue
//     }
//   });
//   fireEvent.input(confirmNewPassword, {
//     target: {
//       value: `${mockValue}4`
//     }
//   });
//   await act(async () => {
//     fireEvent.submit(submitButton);
//   });
//   expect(container.textContent).toMatch(
//     /New password and confirm new password does not match/
//   );
// });
// test("Should submit form successfully", async () => {
//   apiCall.mockImplementationOnce(() => Promise.resolve(true));
//   const { container } = render(<ResetPassword />);
//   const newPassword = container.querySelector(
//     "input[name='newPassword']"
//   );
//   const confirmNewPassword = container.querySelector(
//     "input[name='confirmNewPassword']"
//   );
//   const submitButton = container.querySelector(
//     "input[type='submit']"
//   );
//   fireEvent.input(newPassword, {
//     target: {
//       value: mockValue
//     }
//   });
//   fireEvent.input(confirmNewPassword, {
//     target: {
//       value: mockValue
//     }
//   });
//   await act(async () => {
//     fireEvent.submit(submitButton);
//   });
//   expect(apiCall).toHaveBeenCalledWith(mockPostData);
// });