This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Notes

How does dispatch works on the Quatrixs’ System?
Dispatch is initiated when a shipper places an order on the Quatrix System. The shipper must provide pickup and drop-off locations, load details. When the systems receives the correct order details, the matching system attempts to match the order to carriers based on their proximity to pickup location and order queue. The most suitable driver receives a request to accept the order. If the system did not match carriers the order is elevated to the dispatch system where a manual dispatch takes place.

Key User flows 1. created 2. finalizing_order 3. matching_carriers 4. carrier_confirmed 5. driver_accepted 6. on_transit_to_pickup 7. at_origin 8. on_transit 9. at_destination 10. delivered 11. canceled

Dispatch order details
Details
Route
Schedule
Amount
Distance

Order_number
• Date, Amount
• Status : [created, finalising_details, matching_carriers, driver_assigned ],[in_transit_to_pickup, at_origin] , [in_transit, at_destination], [delivered], [cancelled]  
 • Needs attention – stuck in intermediate status, eta time exceeding, Approaching time
• Shipper
Multi-drop?
Commodity
• Vehicle/driver assigned
• Pickup
• Drop-off
• Timeline - created at, pickup date, dropoff date
• Order_status
• Amount
• Distance /
• Actions - Assign Driver/Vehicle

ORDER_DETAILS
