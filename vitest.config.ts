import { defineConfig } from 'vite';
import path from 'node:path';
import configuration from './vite.config';

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
    exclude: [
      'node_modules/**', // Prevents running tests from dependencies
      'dist/**', // Exclude built files
      'e2e/**', // Exclude Playwright E2E tests
      '**/*.spec.ts', // Ignore Playwright test files if using `.spec.ts`
      '**/playwright/**', // Ignore Playwright directory if it exists
    ],
  },
  coverage: {
    statements: 54.92,
    thresholdAutoUpdate: true,
    include: ['src/**/*'],
    exclude: [
      'test/**',
      'vite.*.ts',
      '**/*.d.ts',
      '**/*.test.*',
      '**/*.spec.*', // Also exclude .spec.ts for coverage
      '**/*.config.*',
      '**/snapshot-tests/**',
      '**/*.solution.tsx',
      '**/coverage/**',
    ],
    all: true,
  },
});
