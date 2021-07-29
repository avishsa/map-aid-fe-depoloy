import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { queryByTestId } from '@testing-library/dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ReportCreate from '../ReportCreate';
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