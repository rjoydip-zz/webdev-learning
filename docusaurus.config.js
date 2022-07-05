// @ts-check
const path = require("path");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "WebDevL",
  tagline: "Webdev Learning",
  url: "https://webdev-learning-788esi49e-rjoydip.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  trailingSlash: true,
  organizationName: "rjoydip",
  projectName: "webdev-learning",
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
          customCss: [
            require.resolve(
              "./node_modules/modern-normalize/modern-normalize.css"
            ),
            require.resolve("./src/styles/custom.scss"),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light"
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
        {
          position: "left",
          to: "/playground",
          label: "Playground",
          activeBasePath: "playground",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          position: "left",
          to: "/showcase",
          label: "Showcase",
          activeBasePath: "showcase",
        },
        {
          type: "search",
          position: "right",
        },
      ],
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
      "@docusaurus/theme-search-algolia",
    ],
  },
};

module.exports = config;
