import { defineConfig } from "vite";

export default defineConfig({
  // three.js fica no chunk do núcleo da Lumen, carregado sob demanda
  build: { chunkSizeWarningLimit: 600 },
});
