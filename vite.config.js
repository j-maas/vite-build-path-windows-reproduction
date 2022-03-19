const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "elm-stuff/elm-pages/index.html",
        },
    }
});