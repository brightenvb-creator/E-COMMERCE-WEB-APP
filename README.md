# E-COMMERCE-WEB-APP

Modern e-commerce web app built with React, TypeScript, Vite, and Tailwind CSS. It features a product catalog, cart and checkout flow, order history, authentication pages, and an admin dashboard backed by mock data.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- React Router
- Tailwind CSS

## Features

- Product listing and product cards
- Cart management and checkout
- Order history and checkout success screen
- Auth pages: Login and Signup
- Admin dashboard with product/order management (mocked)

## Getting Started

Prerequisites: Node.js 18+ and npm

```bash
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser.

## Useful Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – build production bundle to `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Project Structure

```
src/
  components/
  contexts/
  data/
  pages/
  types/
```

- `contexts/` provides `AuthContext`, `CartContext`, and `ProductContext` using mock data in `data/mockData.ts`.
- `pages/` includes routes for Home, Products, Cart, Checkout, Orders, Login, Signup, and Admin.

## Deployment (Netlify)

1. Push the repository to GitHub (already configured).
2. In Netlify, choose “Deploy with Git” and select this repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Optionally set a custom domain under Site settings → Domain management.

## License

MIT