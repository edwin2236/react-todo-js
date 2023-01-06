import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const { pathname: root } = new URL('.', import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'Components',
        replacement: path.resolve(root, 'src/app/ui/components'),
      },
      { find: 'app', replacement: path.resolve(root, 'src/app') },
      { find: 'test', replacement: path.resolve(root, 'src/test') },
    ],
  },
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  test: {
    globals: false,
    environment: 'jsdom',
    css: false,
    coverage: {
      all: true,
      lines: 60,
      functions: 70,
      branches: 70,
      statements: 70,
    },
  },
})
