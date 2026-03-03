# AngelscheinKurse - Fishing License Course App

A modern Next.js application to help people find fishing license courses in Germany.

## Features

- **Landing Page** with multiple sections:
  - Hero carousel with auto-advance
  - Services showcase
  - About section with overlapping images
  - Statistics with animated counters
  - Testimonials carousel
  - Features grid
  - Team section with hover effects
  - Featured courses/shop
  - Blog posts
  - Newsletter subscription

- **Courses Page**
  - Filter by level and location
  - Search functionality
  - Add to cart functionality

- **About Us Page**
  - Company story
  - Team showcase
  - Values and features

- **Contact Page**
  - Contact form
  - Google Maps integration
  - FAQ accordion

- **Shopping Cart**
  - Slide-in drawer
  - Quantity controls
  - PayPal checkout integration

- **Internationalization**
  - German (DE) and English (EN) language support
  - Language toggle in header

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Payment**: PayPal JavaScript SDK
- **Font**: Google Fonts - Roboto

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Copy `.env.example` to `.env.local` and add your PayPal client ID:

```bash
cp .env.example .env.local
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx             # Landing page
│   ├── courses/page.tsx     # Courses listing
│   ├── about/page.tsx       # About Us page
│   ├── contact/page.tsx     # Contact page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Header, Footer, CartDrawer
│   ├── landing/             # Landing page sections
│   └── CourseCard.tsx       # Reusable course card
├── context/
│   ├── CartContext.tsx      # Shopping cart state
│   └── LanguageContext.tsx  # i18n state
├── data/
│   ├── courses.ts           # Course data
│   ├── team.ts              # Team members
│   └── testimonials.ts      # Testimonials
└── lib/
    └── utils.ts             # Utility functions
```

## PayPal Integration

To enable PayPal checkout:

1. Create a PayPal Developer account at https://developer.paypal.com
2. Create an app to get your Client ID
3. Add the Client ID to your `.env.local` file:

```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
```

## Deployment

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## License

ISC
