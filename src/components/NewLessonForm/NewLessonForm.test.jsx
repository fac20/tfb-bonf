import React from 'react';
import { render, screen } from '@testing-library/react';
import NewLessonForm from './NewLessonForm';

test('NewLessonForm renders correct form inputs', () => {
  render(<NewLessonForm />);
  screen.getByText('Lesson Title');
  screen.getByText('Date');
  screen.getByText('Time');
  screen.getByText('Select a level:');
  screen.getByText('Skills');
  screen.getByText('Document link');
});
