import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders The New York Times heading', () => {
  render(
    <BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/The New York Times/i);
  expect(linkElement).toBeInTheDocument();
});
