/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.jeugdvangisteren.nl',
    generateRobotsTxt: true,
    exclude: ['/studio'],
}