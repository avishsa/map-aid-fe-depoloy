// import React from 'react';
// import renderer from 'react-test-renderer';
// import { cleanup, fireEvent, render } from '@testing-library/react';
// import Checkbox from '../../src/Components/boilerplate/form/Checkbox';
// import localStorageMock from '../mocks/localStorage';


// beforeEach(() => {
  
// });
// afterEach(() => {
  
// });
// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('report changes the class when hovered', () => {
//   const component = renderer.create(
//     <Checkbox/>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

  
// });
import React from "react";
import ReportCreate from "../../src/Components/Reports/ReportCreate";
import App from "../../src/Components/App";
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import reports from "../../src/api/reports";
import { LocalStorageMock } from '@react-mock/localstorage';
jest.mock("../../src/api/reports");
const mockPostData = {
  report_date: new Date(),
  person_gender: 'נקבה'
};
afterEach(cleanup);
/**
 * @jest-environment jsdom
 */
test("should watch input correctly", () => {
  debugger;
  const { container } = render(<LocalStorageMock items={{ location:"בורלא 25, תל אביב" }}><ReportCreate/></LocalStorageMock>);
  
  const report_date = container.querySelector("input[name='person_gender']" );
  
  const person_gender = container.querySelector(
    "input[name='person_gender']"
  );
  console.log("report_date");
  console.dir(report_date);
  
  // fireEvent.input(report_date, {
  //   target: {
  //     value: mockPostData.report_date
  //   }
  // });
  fireEvent.input(person_gender, {
    target: {
      value: mockPostData.person_gender
    }
  });
  // expect(report_date.value).toEqual(mockPostData.report_date);
  expect(person_gender.value).toEqual(mockPostData.person_gender);
});
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