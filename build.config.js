/**
 * Build Configuration - Vite
 * Modern build system configuration for WebGL Reutersvärd Triangle
 * 
 * @fileoverview Production build and development server configuration
 * @author Tatiana Barros
 * @version 4.0.0
 */

import { defineConfig } from 'vite';

export default defineConfig({
    // Base configuration
    base: './',

    // Development server configuration
    server: {
        port: 3000,
        open: true,
        cors: true,
        host: true
    },

    // Preview server configuration (for built app)
    preview: {
        port: 4173,
        open: true
    },

    // Build configuration
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        minify: 'terser',
        target: 'esnext',

        // Rollup options for advanced bundling
        rollupOptions: {
            input: {
                main: './index.html'
            }
        }
    },

    // Dependency optimization
    optimizeDeps: {
        include: ['p5'],
        exclude: []
    }
});