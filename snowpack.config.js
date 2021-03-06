/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-webpack",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
    /* ... */
  },
  devOptions: {
    port: 3000,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
