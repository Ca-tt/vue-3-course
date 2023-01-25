import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePugPlugin from 'vite-plugin-pug-transformer';
// import VueLanguagePlugin from '@volar/vue-language-plugin-pug';

export default defineConfig({
  plugins: [vue(), vitePugPlugin()],
  server: {
    open: true,
  }
})
