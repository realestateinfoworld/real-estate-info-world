# Real Estate Info World

**Premium Dubai real estate databases & verified buyer leads**

Production-ready Next.js 16 website for [realestate-info.world](https://realestate-info.world).

## Features

- Luxury dark enterprise SaaS design (Stripe / Linear / Vercel inspired)
- Full product suite: Owner Database ($250) + Buyer Leads ($1,200)
- Reusable PayPal hosted buttons (React components)
- Premium blurred sample data previews
- Exit-intent conversion popup + sticky mobile CTAs + floating WhatsApp
- Full SEO: sitemap, robots, schema (Organization + Product + FAQ)
- 100% static prerendered + Vercel-ready
- Fully responsive + Framer Motion animations

## Tech

- Next.js 16 (App Router) + TypeScript + Tailwind 4
- Framer Motion + Lucide + Sonner
- PayPal SDK (hosted buttons)

## Local Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

### Deploy to Vercel

1. Push to GitHub
2. Import repo at vercel.com
3. Add custom domain: `realestate-info.world` (and `www` redirect)
4. Done — all routes are statically optimized.

## Environment / PayPal

PayPal SDK is loaded client-side per component using the hosted-buttons flow. No server secrets needed for the current integration.

## Custom Domain

Point your DNS (A/AAAA or CNAME) to Vercel and add `realestate-info.world` in the Vercel dashboard.

## Pages

- `/`
- `/products`
- `/products/property-owner-database`
- `/products/buyer-leads`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/refund-policy`

## Contact

- Phone / WhatsApp: +44 75 46 084350
- Email: info@realestate-info.world

Built as a complete premium SaaS marketing site optimized for trust, conversions, and search visibility.
