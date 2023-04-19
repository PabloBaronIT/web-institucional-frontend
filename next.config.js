/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

module.exports = withFonts({
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
});
