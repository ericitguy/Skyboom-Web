/**
 * JSON-LD structured-data builders.
 *
 * Centralising these keeps the schema.org output consistent with the canonical
 * NAP in site.ts and avoids hand-writing fragile JSON in templates.
 */
import { site, nap, hours } from '../data/site';

const abs = (path: string) => new URL(path, site.url).href;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: nap.streetAddress,
  addressLocality: nap.locality,
  addressRegion: nap.region,
  addressCountry: nap.countryCode,
};

const openingHoursSpecification = hours.spec.map((block) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: block.days,
  opens: block.opens,
  closes: block.closes,
}));

/** Sitewide LocalBusiness / TelecommunicationsBusiness node. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TelecommunicationsBusiness',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs(site.logo),
    image: abs(site.ogImage),
    description: site.description,
    telephone: nap.phoneE164,
    email: site.email,
    foundingDate: site.founded,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: nap.geo.latitude,
      longitude: nap.geo.longitude,
    },
    areaServed: [
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Place', name: 'West Africa' },
    ],
    openingHoursSpecification,
    knowsLanguage: ['en'],
    slogan: site.tagline,
  };
}

/** Service node linked back to the organization as provider. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: abs(opts.path),
    provider: { '@id': `${site.url}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Place', name: 'West Africa' },
    ],
    category: 'Telecommunications Infrastructure',
  };
}

/** BreadcrumbList for inner pages. Pass ordered [{name, path}] crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** FAQPage from Q/A pairs. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/** WebSite node for sitelinks / search understanding. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en',
  };
}
