import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import TimeZone from '.';
import { render, screen } from '../../test/utilities';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2022, 9, 10));
});

afterEach(() => {
  vi.useRealTimers();
  vi.resetAllMocks();
});

test('it should render successfully', () => {
  render(<TimeZone />);
});

test('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});
test('fetches and displays tasks when getTodos is true', async () => {
  // vi.useFakeTimers(); overrides JavaScript’s built-in timers, such as:
  // ***** setTimeout
  // ***** setInterval
  // ***** setImmediate
  // ***** requestAnimationFrame;
  // Unlike setTimeout, fetch itself does not use timers directly. However, under the hood:

  // ***** Browser APIs like fetch rely on the event loop.
  // ***** Vitest's fake timers "pause" the event loop, stopping fetch from resolving.
  // So we have to use real timers to make the fetch call work.
  vi.useRealTimers();
  render(<TimeZone getTodos={true} />); // No need for act()

  console.log(screen.debug()); // ✅ Prints current DOM
  // expect(await screen.findByTestId('task-list')).toBeInTheDocument();
  expect(await screen.findByText('Task 1')).toBeInTheDocument();
  expect(await screen.findByText('Task 2')).toBeInTheDocument();
});
