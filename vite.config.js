import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    plugins: [
        laravel(['resources/js/app.js', 'resources/css/app.css']),
        react(),
        reactRefresh(),
    ],
});

