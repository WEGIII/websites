const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2192877/profile' },
    { provider: 'twitter', href: 'https://twitter.com/EE_Engineers' },
    { provider: 'facebook', href: 'https://www.facebook.com/EvaluationEngineering' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/applications', label: 'Applications' },
        { href: '/industries', label: 'Industries' },
        { href: '/instrumentation', label: 'Instrumentation' },
        { href: '/test-issues-techniques', label: 'Test Issues & Techniques' },
        { href: '/ee-blogs', label: 'EE Blogs' },
      ],
    },
    secondary: {
      items: [
        { href: '/magazine', label: 'In Print' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/applications', label: 'Applications' },
          { href: '/industries', label: 'Industries' },
          { href: '/instrumentation', label: 'Instrumentation' },
          { href: '/test-issues-techniques', label: 'Test Issues & Techniques' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/ee-blogs', label: 'EE Blogs' },
          { href: '/new-products', label: 'New Products' },
          { href: '/special-reports', label: 'Special Reports' },
          { href: '/industry-events', label: 'Industry Events' },
          { href: '/product-picks', label: 'Product Picks' },
          { href: '/magazine', label: 'Magazine' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-NR2DFJQ',
  search: {
    engine: 'bing',
    apiKey: '2682f90e71ea403b9cbf6fa7740bf006',
    domain: 'evaluationengineering.com',
  },
  subscriptions: {
    newsletters: 'https://www.evaluationengineering.com/subscribe/email',
    publications: {
      '/subscribe/print/ee': 'https://endeavor.dragonforms.com/ee_new',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#d71920',
      logo: 'https://base.imgix.net/files/base/ebm/ee/image/static/logo/site_logo_bare.png',
    },
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
