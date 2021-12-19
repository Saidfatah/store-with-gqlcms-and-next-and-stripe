const description =
  'built with gqcms, Next.js, Stripe, and Vercel.'
const title = 'Build Modern Commerce Experiences with a Headless CMS'
const url = 'https://commerce.withheadlesscms.com'

const seo = {
  title,
  titleTemplate: '%s | GraphCMS Said Fatah',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@GraphCMS',
    site: '@GraphCMS'
  }
}

export { seo as defaultSeo, url as defaultUrl }
