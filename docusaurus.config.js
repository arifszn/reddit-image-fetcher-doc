module.exports = {
  title: 'Reddit Image Fetcher',
  tagline: 'A JavaScript package for fetching reddit images, memes, wallpapers and more',
  url: 'https://arifszn.github.io',
  baseUrl: '/reddit-image-fetcher/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo/favicon.ico',
  organizationName: 'arifszn',
  projectName: 'reddit-image-fetcher',
  scripts: [
  ],
  themeConfig: {
    image: 'img/logo/logo.png',
    metadatas: [{name: 'Reddit Image Fetcher', content: 'A JavaScript package for fetching reddit images, memes, wallpapers and more'}],
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    announcementBar: {
      id: 'support_us_1', // Any value that will identify this message.
      content:
        '⭐️ If you like this project, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reddit-image-fetcher">GitHub</a>! ⭐️',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    googleAnalytics: {
      trackingID: 'UA-138314953-5',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Reddit Image Fetcher',
      hideOnScroll: false,
      logo: {
        alt: 'Logo',
        src: 'img/logo/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/arifszn/reddit-image-fetcher',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://arifszn.github.io" target="_blank">Ariful Alam</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};