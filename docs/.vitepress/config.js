export default {
  themeConfig: {
    appearance: 'dark',
    logo: '/logo.svg',
    siteTitle: false,
    footer: {
      copyright: '© 2022 AtScale Technologies'
    },
    nav: [
      { text: 'Overview', link: '/overview/', activeMatch: '/overview/' },
      { text: 'SDK', link: '/sdk/' }
    ],
    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
          items: [
            { text: 'Introduction', link: '/overview/' },
            { text: 'Setup a Libra Node', link: '/overview/setup-a-libra-node' },
            { text: 'Lock And Release Payment', link: '/overview/lock-and-release-protocol' },
            { text: 'Decentralized Dispute Resolution', link: '/overview/decentralized-dispute-resolution' },
            { text: 'On-chain identity', link: '/overview/on-chain-identity' },
          ],
        },
      ],
      '/sdk/':[
        {
          text: 'Javascript SDK',
          items: [
            { text: 'Getting started', link: '/sdk/' },
            { text: 'Connect Wallet', link: '/sdk/connect-wallet' },
            { text: 'Payments Handling', link: '/sdk/payments' },
            { text: 'Currencies', link: '/sdk/currencies' },
            { text: 'Identities', link: '/sdk/identities' },
            { text: 'Lock And Release Protocol', link: '/sdk/payments' },
            { text: 'Decentralized Dispute Resolution', link: '/sdk/disputes' },
            { text: 'Resolvers Network', link: '/sdk/resolvers-network' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/atscaletech/libra' },
      { icon: 'twitter', link: 'https://twitter.com/PayWithLibra' },
    ]
  },
  siteTitle: 'Libra',
  description: 'Decentralized payments system that empowers the next e-commerce'
}