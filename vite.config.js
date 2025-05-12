import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import { viteSingleFile } from "vite-plugin-singlefile";

// export default defineConfig({
//   plugins: [viteSingleFile()],
// });

// import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shop-vis",
});
