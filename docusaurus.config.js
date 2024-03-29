// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Digital Garden',
  tagline: 'Created to digitize and document my knowledge, experience and learning journey',
  url: 'https://haikalbaik.dev/',
  baseUrl: '/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haikalbaik', // Usually your GitHub org/user name.
  projectName: 'www', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haikalbaik/www',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haikalbaik/www',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'Docs & Notes',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/haikalbaik',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/about',
            position: 'left',
            label: 'About Me',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Me',
            items: [
              {
                label: 'My Contact',
                to: '/about',
              },
              {label: 'LinkedIn',
               href: 'https://www.linkedin.com/in/mohdhaikalmohdisa/'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/haikalbaik',
              },
              {
                label: 'TryHackMe',
                href: 'https://tryhackme.com/p/FakeAdmin',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/haikalbaik',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
