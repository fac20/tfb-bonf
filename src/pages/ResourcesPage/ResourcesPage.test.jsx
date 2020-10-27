import React from 'react';
import { render, screen } from '@testing-library/react';
import ResourcesPage from './ResourcesPage';

test('Resources page renders', () => {
  render(<ResourcesPage />);
  screen.getAllByText('Resources');
});
