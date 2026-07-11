# SYNO SOLUTIONS

Production website for SYNO SOLUTIONS, built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Website Structure

- `/` - company overview
- `/solutions` - consultation, process, technology, and automation support
- `/products` - Kotti and Visel product overview
- `/products/kotti` - Kotti product information
- `/products/visel` - Visel product information
- `/about` - company approach and distribution role
- `/contact` - enquiry form and company contact details
- `/privacy` - website enquiry privacy notice

InnoX is presented as the manufacturer of Kotti and Visel. SYNO SOLUTIONS is presented as their Malaysia distributor.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Contact Form

The form posts to the Vercel function at `/api/contact`, which delivers enquiries to `synosolutions.ent@gmail.com` through Resend.

Create these environment variables in Vercel:

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL=SYNO SOLUTIONS <website@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use a sender accepted by Resend. Until both variables are configured, the form returns a clear direct-email fallback instead of silently losing an enquiry.

`vercel.json` provides clean React Router URLs and security headers for the Vercel deployment.

## Checks

```bash
npm run lint
```
