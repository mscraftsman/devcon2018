/*
  @nirvan TBR'ed the meta tags
*/

module.exports = {
  head: {
    title: 'Developers Conference 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'rights', content: '© Mauritius Software Craftsmanship Community (MSCC) - 2018' },
      { name: 'origin', content: '/images/og-image.jpg' },
      { name: 'author', content: 'Mauritius Software Craftsmanship Community (MSCC)' },
      { hid: 'description', name: 'description', content: 'Developers Conference 2018 Official Website' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Developers Conference 2018' },
      { hid: 'og:url', property: 'og:url', content: 'https:/www.conference.mscc.mu' },
      { hid: 'og:image', property: 'og:image', content: '/images/og-image.jpg' },
      { hid: 'og:description', property: 'og:description', content: 'After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the fourth edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Developers Conference 2018' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@MSCraftsman' },
      { hid: 'twitter:card', name: 'twitter:site', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Developers Conference 2018' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https:/www.conference.mscc.mu' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/images/og-image.jpg' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'After the success of previous years the Mauritius Software Craftsmanship Community (MSCC) is organising the fourth edition of the Developers Conference in partnership with a number of local and international companies. Although the MSCC was founded back in 2013 it quickly became clear that our tropical island has a certain lack of informational and technical events. During some monthly meetups we spoke about this situation and that it would be very interesting and delightful to organise such an event.' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@MSCraftsman' },
      { hid: 'fb:admins', property: 'fb:admins', content: '' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
      { hid: 'fb:pages', property: 'fb:pages', content: '181737551985316' },
      { name: 'msapplication-square70x70logo', content: '/images/favicon/smalltile.png' },
      { name: 'msapplication-square150x150logo', content: '/images/favicon/mediumtile.png' },
      { name: 'msapplication-wide310x150logo', content: '/images/favicon/widetile.png' },
      { name: 'msapplication-square310x310logo', content: '/images/favicon/largetile.png' },
      { name: 'theme-color', content: '#2847d9' },
      { name: 'msapplication-TileColor', content: '#2847d9' },
      { hid: 'article:author', property: 'article:author', content: 'Mauritius Software Craftsmanship Community (MSCC)' },
      { hid: 'name', itemprop: 'name', content: 'Developers Conference 2018' },
      { hid: 'description', itemprop: 'description', content: 'Developers Conference 2018' },
      { hid: 'image', itemprop: 'image', content: '/images/og-image.jpg' }
    ],
    link: [
      { rel: 'canonical', href: 'https:/www.conference.mscc.mu' },
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
      { rel: 'stylesheet', href: 'https:/use.fontawesome.com/releases/v5.0.6/css/all.css'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicon/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicon/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicon/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicon/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicon/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicon/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicon/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicon/apple-touch-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon-180x180.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/images/favicon/favicon-96x96.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/images/favicon/android-chrome-192x192.png' },
      { rel: 'publisher', href: 'https://plus.google.com/109537765013108874281' }
    ]
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    '@/assets/style/main.scss'
  ],
  plugins : [
    { src: '~/plugins/smooth-scroll', ssr: false },
    { src: '~/plugins/masonry', ssr: false }
  ],
  // mode: 'spa',
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
