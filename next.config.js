/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// };

module.exports = nextConfig;

const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};