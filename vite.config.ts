﻿import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/travel-diary-spa/",
  plugins: [react()],
});
