import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());

  const PORT = `${env.VITE_PORT ?? "3000"}`;

  return {
    plugins: [react()],
    server: {
      port: PORT,
      host: true,
    },

    build: {
      outDir: "public",
    },
  };
});
