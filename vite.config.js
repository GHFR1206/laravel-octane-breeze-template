import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        
        react(),
    ],
    server: {
        host: '0.0.0.0', // Buka akses ke semua network Docker
        port: 5173,
        hmr: {
            host: 'localhost', // Kasih tau browser buat nyari Vite di localhost laptop lo
        },
    },
});
