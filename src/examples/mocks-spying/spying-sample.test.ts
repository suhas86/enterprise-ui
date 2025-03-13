import { vi, describe, it, expect } from 'vitest';
import { logger } from './spying-sample';

describe('Spying on logger function', () => {
    it('should call console.log with correct message', () => {
        const logSpy = vi.spyOn(console, 'log'); // Spy on console.log

        logger('Hello, Suhas!');

        expect(logSpy).toHaveBeenCalledTimes(1); // Check if it was called once
        expect(logSpy).toHaveBeenCalledWith('Hello, Suhas!'); // Check the argument

        logSpy.mockRestore(); // Restore original console.log
    });
});
