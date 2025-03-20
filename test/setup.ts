// Import the `expect` function from Vitest, which is used for writing test assertions.
import { expect } from "vitest";

// Import all matchers from `@testing-library/jest-dom/matchers`.
// These matchers extend Jest's built-in assertions to make them more readable and useful for testing DOM elements.
import * as matchers from "@testing-library/jest-dom/matchers";

// Import `@testing-library/jest-dom` to enable additional matchers like `.toBeInTheDocument()`, `.toHaveTextContent()`, etc.
import "@testing-library/jest-dom";

// Extend Vitest's `expect` function with the additional matchers from `jest-dom`.
// This allows us to use matchers like `expect(element).toBeInTheDocument()`.
expect.extend(matchers);
