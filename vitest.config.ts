import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./test/**/*.test.ts'],
        globals: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/'),
        },
    },
});
