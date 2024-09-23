import { defineConfig, ViteDevServer } from 'vite';
import { app } from './app-server';

function expressPlugin() {
  return {
    name: 'express-plugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

export default defineConfig({
  plugins: [expressPlugin()],
});
