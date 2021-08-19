import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import "@testing-library/jest-dom"
import ReportCreate from '../../src/Components/Reports/ReportCreate';


// test("it should validate date required", async () => {
//   const { findByLabelText/*Input */,
//     findByText/**ValidMsg */,
//     findByRole/**Button Sub */ } = render(<ReportCreate />);
//     const input = await findByLabelText("תאריך");
// })
let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("renders without crashing", () => {
    act(() => {
        ReactDOM.render(<ReportCreate />, container);
      });
})
it("test form click isDistressed", () => {
    act(() => {
        ReactDOM.render(<ReportCreate />, container);
      });

    const distressedCB = container.querySelector('#destressCB');

    expect(distressedCB.checked).toBe(false);
    act(() => {
        distressedCB.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      });   
    expect(distressedCB.checked).toBe(true);
});