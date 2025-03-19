// @vitest-environment jsdom
// Above configuration is not required once we define environmentMatchGlobs in vitest.config.ts
import { screen, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
// Uncomment this when we use the third way of doing it
// import { render } from '../../../test/utilities';
import Counter from './Counter';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.textContent).toBe('0');
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);
  expect(currentCount.textContent).toBe('1');
});

test('[ANOTHER WAY OF DOING IT] it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.textContent).toBe('0');
  const button = screen.getByRole('button', { name: /increment/i });
  await user.click(button);
  expect(currentCount.textContent).toBe('1');
});

// test('[THIRD WAY By REFACTORING IT] it should increment when the "Increment" button is pressed', async () => {
//   const { user } = render(<Counter />);
//   const currentCount = screen.getByTestId('current-count');
//   expect(currentCount.textContent).toBe('0');
//   const button = screen.getByRole('button', { name: /increment/i });
//   await user.click(button);
//   expect(currentCount.textContent).toBe('1');
// });

test.todo('it should render the component with an initial count', () => {});

test.todo(
  'it should reset the count when the "Reset" button is pressed',
  async () => {}
);
