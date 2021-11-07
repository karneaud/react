// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render } from '@testing-library/react';
import BrowserRouter from 'react-router-dom';
import '@testing-library/jest-dom';

const renderWithRouter = (ui, {route = '/'} = {})  => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

export default renderWithRouter;