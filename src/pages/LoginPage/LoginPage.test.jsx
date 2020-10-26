import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('Login page renders correct form inputs', () => {
  render(<LoginPage />);
  screen.getByText('Email');
  screen.getByText('Password');
  screen.getAllByText('Log in');
});
