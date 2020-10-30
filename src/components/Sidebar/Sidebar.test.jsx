import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('Sidebar renders correct links', () => {
  render(<Sidebar />);
  screen.getByText('Home');
  screen.getByText('Lessons');
  screen.getByText('Resources');
  // screen.getByText('Calendar');
  screen.getByText('Useful Links');
  screen.getByText('Logout');
});
