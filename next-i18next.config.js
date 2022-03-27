const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localePath: path.resolve('./public/static/locales'),
  },
  languages: [
    {
      locale: 'en',
      name: 'English',
    },
    {
      locale: 'ar',
      name: 'العربية',
    },
  ],
};
