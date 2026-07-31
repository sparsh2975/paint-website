# HR Enterprises — Birla Opus Paint Dealer Website

A premium, animated storefront + inventory dashboard for a paint dealership, built with React, Tailwind CSS, and Framer Motion.

## Folder structure

```
hr-enterprises/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Assembles all sections, holds shared inventory state
    ├── index.css              # Tailwind + global styles
    ├── data/
    │   └── products.js        # Paint catalogue (edit this to change products/shades)
    └── components/
        ├── Loader.jsx          # Full-screen loading animation
        ├── Navbar.jsx          # Sticky nav with smooth scroll
        ├── Hero.jsx            # Full-screen hero + paint swatch wall
        ├── Products.jsx        # Filterable product cards
        ├── InventoryDashboard.jsx  # Admin panel: add product, update stock, totals & profit
        ├── BuyList.jsx          # Purchase ledger: search past buys, log new ones, see original cost
        ├── Features.jsx        # Durability / finish / weather / eco-friendly
        ├── Gallery.jsx         # Masonry image gallery with hover reveal
        ├── Contact.jsx         # Contact form + shop details
        └── Footer.jsx          # Footer with links & socials
```

## Run it

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

## Customizing

- **Products & shades** — edit `src/data/products.js`. Each product has sizes (1L/4L/10L/20L), price, stock, cost per unit, and units sold — the dashboard totals and profit are calculated automatically from this data.
- **Colors / branding** — edit the `colors` block in `tailwind.config.js` (the `opus.orange` / `opus.amber` tokens drive the gradient theme throughout).
- **Gallery photos** — `src/components/Gallery.jsx` currently uses placeholder images from picsum.photos so the site runs instantly out of the box. Replace the `img` URLs with your own photos (e.g. put files in `/public/gallery` and reference them as `/gallery/your-photo.jpg`).
- **Contact details** — update the phone/address/email in `Contact.jsx` and `Footer.jsx`.
- **Contact form submission** — the form currently just shows a success state locally. Wire the `handleSubmit` function in `Contact.jsx` up to your email service, backend, or a form provider (e.g. Formspree) to actually receive messages.

## Buy List (purchase ledger)

`src/data/purchases.js` holds every line item bought from the distributor (material code, size, rate, discount, net cost, invoice number/date) — separate from `products.js`, which is your retail catalogue. This is what YOU paid, not what you sell for.

- **Search** by shade name, material code, or invoice number to instantly find what you paid for an item last time.
- Rows are sorted newest first, so if an item was bought on multiple invoices, the top row is its most recent cost.
- **Log a Purchase** adds a new row instantly — net cost is calculated automatically as `(qty × rate) − discount`.
- The starting data was transcribed from six photographed Grasim/Birla Opus invoices. A few figures were hard to read at an angle — worth a quick cross-check against the paper invoices, especially the entries marked `invoiceNo: "JK-unreadable-1"` (the invoice number wasn't visible in that photo). Everything is editable directly in `purchases.js` or from the on-page form.

## Notes on the inventory dashboard

- **Add Product** creates a new paint entry with one size/price/stock combination — you can add more sizes by editing `products.js` directly, or extend the form.
- **Update stock** lets you correct/set the current stock for any product size inline.
- **Profit** is calculated as `(price − cost per unit) × units sold`, summed across every size and product, and updates instantly whenever you change data.
- State is kept in React (`App.jsx`) for simplicity — it resets on page refresh. Connect it to a real database (Firebase, Supabase, or your own API) for persistence in production.

## Tech stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [lucide-react](https://lucide.dev/) for icons
