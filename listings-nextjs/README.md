# Listings — Next.js

A React/Next.js rebuild of the Listings Explorer, replacing the vanilla JavaScript implementation with a component-based architecture. Features paginated accordion views, reusable components, dynamic routing, and data fetching with SWR.

## Demo

<!-- Add a short video or GIF showing the accordion, pagination, about page, and dynamic listing route -->
> [LIVE listings-nextjs](https://web422-assignment-3-h7ax.onrender.com)

## Learning Outcomes

- Migrating from a **document-based (vanilla JS)** to a **component-based (React/Next.js)** architecture
- Building **reusable React components** (ListingDetails, PageHeader) shared across multiple pages
- Implementing **client-side data fetching with SWR** and a globally configured fetcher
- Using **Next.js dynamic routes** (`/listing/[id]`) for individual listing pages
- Pre-rendering data at build time with **`getStaticProps`** for the About page
- Managing **pagination state** with React hooks (`useState`, `useEffect`)
- Using **React-Bootstrap** components (Accordion, Pagination, Card, Navbar, Container)
- Implementing **Next.js layouts** with a shared Layout component and `_app.js` configuration

## Technologies

- React
- Next.js (Pages Router)
- SWR
- React-Bootstrap
- Bootstrap 5
- Node.js

## My Responsibilities

- Scaffolded the Next.js app and configured `_app.js` with SWR global fetcher and Layout wrapper
- Built **6 components**:
  - `MainNav` — responsive navbar with Next.js Link routing
  - `Layout` — shared layout wrapping all pages
  - `PageHeader` — reusable header card component
  - `ListingDetails` — two-column detail view (image + listing info) with error fallback
  - `Home (index.js)` — paginated accordion displaying 10 listings per page via SWR
  - `Listing ([id].js)` — dynamic route rendering a single listing with 404 error handling
- Built the **About page** with `getStaticProps` to pre-render a specific listing at build time
- Implemented **previous/next pagination** with state-driven SWR refetching
- Handled edge cases: missing images, null fields (neighborhood_overview, summary), and SWR loading/error states

## Provided Code

- The **Listings API** (from Assignment 1) was used as the data source
- React-Bootstrap component library
- Assignment specification with component hierarchy and JSX structure guidelines

---

*Built as part of coursework at Seneca Polytechnic — Computer Programming & Analysis*
