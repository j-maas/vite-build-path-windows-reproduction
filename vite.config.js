const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.html",
        },
    }
});