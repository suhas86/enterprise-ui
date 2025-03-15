import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import TimeZone from '.';
import { render } from '../../test/utilities';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2022, 9, 10));
});

afterEach(() => {
  vi.useRealTimers();
});

test('it should render successfully', () => {
  render(<TimeZone />);
});

test('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});
