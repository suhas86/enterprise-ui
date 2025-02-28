import { defineConfig } from "vite";
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
    }
});
