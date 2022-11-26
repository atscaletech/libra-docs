export default {
  
  title: 'Libra',
  description: 'Decentralized payments system that empowers the next e-commerce',
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
            { text: 'Payment Protocol', link: '/overview/payment-protocol' },
            { text: 'Decentralized Dispute Resolution', link: '/overview/decentralized-dispute-resolution' },
            { text: 'On-chain identity', link: '/overview/on-chain-identity' },
            { text: 'Off-chain SDK', link: '/overview/off-chain-sdks' },
            { text: 'On-chain governance', link: '/overview/on-chain-governance' },
            { text: 'Setup a Libra Node', link: '/overview/setup-a-libra-node' },
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
            { text: 'Disputes Handling', link: '/sdk/disputes' },
            { text: 'Currencies', link: '/sdk/currencies' },
            { text: 'Identities', link: '/sdk/identities' },
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
}