import { vi, describe, it, expect } from 'vitest';
import { add } from './mock-sample';

vi.mock('./mock-sample', () => ({
  add: vi.fn(() => 100), // Mock implementation
}));

describe('Mocking a function in Vitest', () => {
  it('should return mocked value instead of real calculation', () => {
    expect(add(2, 3)).toBe(100); // Uses the mocked value
  });
});
