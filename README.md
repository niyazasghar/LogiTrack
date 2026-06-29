# LogiFlow Operations Platform

LogiFlow is a DevShuttle Lab Build: a logistics operations, shipment tracking, and client visibility platform built as an internal product showcase for a software agency portfolio.

It demonstrates how a growing logistics company, courier team, warehouse operator, or delivery business can manage shipment booking, parcel tracking, client records, delivery status workflows, payment visibility, support issues, and operational dashboards from one clean SaaS interface.

## Features

- Public landing page for LogiFlow positioning
- Public parcel tracking page by tracking ID
- Admin operations dashboard with logistics KPIs
- Shipment management with filters and detail pages
- Client management and shipment history
- Driver and delivery team workload views
- Payment and invoice tracking
- Support issue tracking for delivery exceptions
- Simulated role structure for Admin, Operations Manager, Client, and Driver
- Realistic demo data using Indian/global logistics examples

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn-style Radix UI components
- Lucide icons

## Local Setup

```bash
npm install --legacy-peer-deps
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

The current portfolio build runs with local demo data and does not require environment variables.

For a production build, expected integrations could include:

```bash
NEXT_PUBLIC_APP_URL=
DATABASE_URL=
PAYMENT_PROVIDER_KEY=
EMAIL_PROVIDER_KEY=
MAPS_PROVIDER_KEY=
```

## Demo Credentials

The demo login screen accepts simulated credentials:

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@logiflow.dev | demo1234 |
| Operations Manager | ops@logiflow.dev | demo1234 |
| Client | client@logiflow.dev | demo1234 |
| Driver | driver@logiflow.dev | demo1234 |

## Deployment

### Vercel

```bash
npm install --legacy-peer-deps
npm run build
vercel
```

### Generic Node Hosting

```bash
npm install --legacy-peer-deps
npm run build
npm run start
```

## Screenshots

Add screenshots after deployment:

- Landing page
- Admin dashboard
- Shipment management
- Public tracking page
- Client portal

## Attribution and License

This transformed project is presented as a DevShuttle Lab Build. If the original repository includes a license file or attribution requirements, keep those legal notices intact while removing original user-facing product branding from the application.
