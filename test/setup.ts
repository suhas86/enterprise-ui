// Import the `expect` function from Vitest for writing test assertions.
import { expect, beforeAll, afterEach, afterAll } from "vitest";

// Import all matchers from `@testing-library/jest-dom/matchers`.
import * as matchers from "@testing-library/jest-dom/matchers";

// Import `@testing-library/jest-dom` to enable additional matchers.
import "@testing-library/jest-dom";

// Extend Vitest's `expect` function with the additional matchers.
expect.extend(matchers);

// Import MSW's server setup
import { server } from "../src/mocks/server";


// Start the server before all tests run
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (in case we modify them in a test)
afterEach(() => server.resetHandlers());

// Close the server after all tests finish
afterAll(() => server.close());
