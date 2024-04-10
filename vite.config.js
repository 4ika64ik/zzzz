import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Добавление MP4 файлов в список статических ассетов
  assetsInclude: ['**/*.mp4', '**/*.MP4']
});
