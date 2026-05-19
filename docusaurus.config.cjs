const path = require('node:path');
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'async-modal-render-native',
  tagline: 'React Native 弹窗 Promise 化工具库',
  favicon: 'img/favicon.ico',

  url: 'https://byte-n.github.io',
  baseUrl: process.env.NODE_ENV === 'production' ? '/async-modal-render-native/' : '/',
  organizationName: 'Byte-n',
  projectName: 'async-modal-render-native',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  customFields: {
    liveCodeBlock: {
      defaultCollapsed: false,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.cjs'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/Byte-n/async-modal-render-native/tree/main/',
        },
        blog: false,
        theme: {
          customCss: path.resolve(__dirname, 'docs-site/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    function generatedFilesCompatPlugin() {
      return {
        name: 'generated-files-compat',
        configureWebpack(config, isServer, {getJSLoader}) {
          config.resolve?.extensions?.unshift('.web.js', '.web.ts', '.web.tsx');

          return {
            resolve: {
              alias: {
                'react-native$': 'react-native-web',
              },
            },
            module: {
              rules: [
                {
                  test: /\.js$/,
                  include: path.resolve(__dirname, '.docusaurus'),
                  type: 'javascript/auto',
                },
                {
                  test: /\.(j|t)sx?$/,
                  include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'docs-site'),
                  ],
                  use: [
                    getJSLoader({
                      isServer,
                      babelOptions: {
                        plugins: ['react-native-web'],
                        presets: [
                          [
                            'module:@react-native/babel-preset',
                            {
                              disableImportExportTransform: true,
                            },
                          ],
                        ],
                      },
                    }),
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'async-modal-render-native',
        items: [
          {to: '/guide', label: '快速开始', position: 'left'},
          {to: '/components', label: '使用手册', position: 'left'},
          {to: '/api', label: 'API', position: 'left'},
          {to: '/changelogs', label: '更新日志', position: 'left'},
          {
            href: 'https://github.com/Byte-n/async-modal-render-native',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {label: '快速开始', to: '/guide'},
              {label: 'API', to: '/api'},
              {label: 'Agent Skills', to: '/guide/agent-skills'},
            ],
          },
          {
            title: '相关资源',
            items: [
              {label: 'Docusaurus', href: 'https://docusaurus.io/'},
              {label: 'GitHub', href: 'https://github.com/Byte-n/async-modal-render-native'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Byte-n.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'typescript', 'tsx'],
      },
    }),
};

module.exports = config;
