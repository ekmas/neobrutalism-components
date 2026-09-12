/**
 * Origin the registry is served from, used for the CLI commands shown in the
 * docs, on the styling page and on the stars page. Locally that is the dev
 * server, so the commands can be tried against unpublished registry items;
 * in production it is the site. Set NEXT_PUBLIC_SITE_URL to override, for
 * example when the dev server runs on another port.
 *
 * The registry files themselves (src/data/registry.ts and the styling items)
 * keep the production origin, since they are what gets published.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://neobrutalism.dev"
    : "http://localhost:3000")

export const REGISTRY_URL = `${SITE_URL}/r`
