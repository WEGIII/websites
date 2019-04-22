const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=100 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline' },
  ],
  primaryNavItems: [
    { href: '/network-design', label: 'Network Design' },
    { href: '/fttx', label: 'FTTX' },
    { href: '/sdn-nfv', label: 'SDN/NFV' },
    { href: '/data-center', label: 'Data Center' },
    { href: '/test', label: 'Test' },
    { href: '/optical-tech', label: 'Optical Tech' },
    { href: '/business', label: 'Business' },
    { href: '/education', label: 'Education' },
  ],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-M3B7WXJ',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:wpucddduxta',
  },
};
