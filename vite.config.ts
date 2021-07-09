import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: "BarBender",
        orientation: "portrait",
        background_color: "#000000",
        theme_color: "#447857",
        description: "Calculates the plates for a barbell",
        icons: [36, 48, 72, 96, 144, 192, 512].map((s) => ({
          src: `/public/icons/android/launcher-icon-${s}x${s}.png`,
          type: "image/png",
          sizes: `${s}x${s}`,
        })),
      },
    }),
  ],
});
