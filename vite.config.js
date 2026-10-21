import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages serve em /CollabAnimated/; caminhos relativos funcionam também em qualquer outro host
  base: "./",
  // three.js fica no chunk do núcleo da Lumen, carregado sob demanda
  build: { chunkSizeWarningLimit: 600 },
});
