import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Client directives are informational in this browser-only Vite app.
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
        warn(warning);
      },
      output: {
        manualChunks(id) {
          const path = id.replaceAll('\\', '/');
          if (/node_modules\/(react|react-dom|scheduler)\//.test(path)) return 'react-vendor';
          if (path.includes('/node_modules/')) return 'ant-design';
        },
      },
    },
  },
});
