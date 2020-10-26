import React from 'react';
import { render, screen } from '@testing-library/react';
import LessonsPage from './LessonsPage';

describe('Lessons page', () => {
  test('Lessons page renders correct fields', () => {
    render(<LessonsPage />);
    screen.getByText('Upcoming');
    screen.getByText('Past');
  });
  test('New lesson button renders ', () => {
    render(<LessonsPage />);
    screen.getByText('Add New Lesson');
  });
});
