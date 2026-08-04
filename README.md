# Real Estate Info World

**Premium Dubai real estate databases & verified buyer leads**

Production-ready Next.js 16 website for [realestate-info.world](https://realestate-info.world).

## Features

- Luxury dark enterprise SaaS design (Stripe / Linear / Vercel inspired)
- Full product suite: Owner Database ($300) + Buyer Leads ($1,200)
- Simple pre-payment lead form (Name + Email only) before PayPal (Resend only, no database)
- Reusable PayPal hosted buttons (React components)
- Premium blurred sample data previews
- Exit-intent conversion popup + sticky mobile CTAs + floating WhatsApp
- Full SEO: sitemap, robots, schema (Organization + Product + FAQ)
- 100% static prerendered + Vercel-ready
- Fully responsive + Framer Motion animations

## Tech

- Next.js 16 (App Router) + TypeScript + Tailwind 4
- Resend + Zod (no database for leads)
- Framer Motion + Lucide + Sonner
- PayPal SDK (hosted buttons) + gated lead capture flow

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

### Required Environment Variables (Lead Capture + Notifications)

```bash
# Resend (used for pre-payment lead email notifications only)
RESEND_API_KEY=
```

Copy `.env.example` → `.env.local` for local development. No database is used for leads.

## Lead Capture Flow

Before any user can reach PayPal checkout they **must** submit a simple lead form (Name + Email only):

1. User clicks "Buy Now" / reaches a product detail page.
2. User enters Full Name and Email Address.
3. Form submits → server sends notification email via Resend.
4. On **successful email delivery only**, automatically redirect to the correct PayPal hosted checkout:
   - Owner Database → `https://www.paypal.com/ncp/payment/9389L2SZJ2U8Y`
   - Buyer Leads → `https://www.paypal.com/ncp/payment/MBUBJ6QVQ2HHN`

If the email fails to send, an error is shown and the user is **not** redirected to PayPal.

Products:
- Dubai Property Owner Database ($300)
- Dubai Property Buyer Leads ($1,200)

### Email Notifications
All leads trigger an email to `info@realestate-info.world` with:
- Subject: `New Lead - Real Estate Info World`
- Body (plain text):
  ```
  Name: {{full_name}}
  Email: {{email}}
  Product: {{product_name}}
  Date: {{date}}
  ```

No leads are stored in any database. Resend is the only external service used for this flow.

### Thank You Page
After PayPal payment completes, configure your PayPal hosted button "Return URL" (in PayPal dashboard) to:
`https://realestate-info.world/thank-you`

## Architecture Notes

- Minimal pre-payment gate: `components/LeadCaptureForm.tsx` (only 2 fields)
- API route: `app/api/leads/route.ts` (validates + sends email via Resend, no persistence)
- Validation: `lib/lead-schema.ts` (Zod — shared client/server)
- PayPal redirect happens client-side only after confirmed email success.
- All validation + error handling ensures no redirect on email failure.

The website design, layout, and branding remain 100% unchanged. Only the lead form fields and backend behavior were simplified (removed WhatsApp, Company, and all database storage).

## Custom Domain

Point your DNS (A/AAAA or CNAME) to Vercel and add `realestate-info.world` in the Vercel dashboard.

## Pages

- `/`
- `/products`
- `/products/owner-database`
- `/products/buyer-leads`
- `/thank-you`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/refund-policy`

## Contact

- Phone / WhatsApp: +44 75 46 084350
- Email: info@realestate-info.world

Built as a complete premium SaaS marketing site optimized for trust, conversions, and search visibility.
