import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        orientation: "portrait",
        name: "BarBender",
        description: "Calculates the plates for a barbell",
      },
    }),
  ],
});
