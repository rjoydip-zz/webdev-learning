// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WebDevL",
  tagline: "Webdev Learning",
  url: "https://rjoydip.github.io/",
  baseUrl: "/webdev-learning/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rjoydip", // Usually your GitHub org/user name.
  projectName: "webdev-learning", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: { label: "English" },
    },
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          react: path.resolve(__dirname, "./node_modules/react"),
          "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
          "@components": path.resolve(__dirname, "./src/components"),
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve("./src/styles/custom.scss")],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "WebDevL",
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Guide",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "search",
            position: "right",
          },
          /* {
            type: "separator",
            position: "right",
          }, */
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/index",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/rjoydip/webdev-learning",
              },
            ],
          },
        ],
        copyright: "Copyright © 2022 - now",
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "KOQRQRT3C6",
        apiKey: "b8c68a88dba482b6e5ea47bf0250b462",
        indexName: "prod_WebDevL",
        contextualSearch: true,
      },
      themes: [
        "@docusaurus/theme-live-codeblock",
        "@docusaurus/theme-search-algolia",
        [
          //overriding the standard docusaurus-theme-classic to provide custom schema
          path.resolve(__dirname, "docusaurus-theme-classic"),
          {
            customCss: [require.resolve("./src/styles/custom.scss")],
          },
        ],
      ],
    }),
};

module.exports = config;
