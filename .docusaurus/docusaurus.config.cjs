// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const extractCode = require('@ice/pkg-plugin-docusaurus/remark/extractCode');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '飞冰组件',
  tagline: 'ICE Component Cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.alicdn.com/imgextra/i2/O1CN01jUf9ZP1aKwVvEc58W_!!6000000003312-73-tps-160-160.ico',
  staticDirectories: [],

  plugins: [
    require.resolve('@ice/pkg-plugin-docusaurus/plugin.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            extractCode,
          ],
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('@ice/pkg-plugin-docusaurus/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '飞冰组件',
        logo: {
          src: 'https://img.alicdn.com/imgextra/i1/O1CN01lZTSIX1j7xpjIQ3fJ_!!6000000004502-2-tps-160-160.png',
        },
      },
    }),
};

module.exports = config;
