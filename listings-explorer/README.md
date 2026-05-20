# Listings Explorer

A client-side single-page application that consumes the Listings API to display Airbnb-style property data in a searchable, paginated table with detailed modal views. Built with vanilla JavaScript and Bootstrap 5.

## Demo

<!-- Add a short video or GIF showing the table, search, pagination, and modal -->
> [Live listings-explorer](https://web422-a2-mvel.onrender.com/)

## Learning Outcomes

- Consuming a **REST API** from the client-side using the **Fetch API**
- Dynamically generating **HTML from JSON data** using template literals and `Array.map()`
- Implementing **client-side pagination** (previous/next) against a paginated API
- Building **interactive modal windows** that load detail data on row click
- Handling **search and filter** functionality with form events
- Graceful **error handling** for failed requests, empty results, and missing data fields
- Working with **Bootstrap 5** components (navbar, table, pagination, modal) via CDN

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Fetch API

## My Responsibilities

- Built the entire front-end from scratch: `index.html`, `main.css`, `main.js`
- Created the **static HTML structure** — navbar with search form, data table skeleton, pagination controls, and a generic modal container
- Implemented `loadListingsData()` — the core function that:
  - Fetches paginated listing data from the API (with optional name filter)
  - Generates table rows dynamically using template literals
  - Handles empty arrays, HTTP errors, and page boundary edge cases
  - Attaches click events to each row to fetch and display detailed listing data in a modal
- Wired up **pagination controls** (previous/next page) with boundary checking
- Implemented **search form submission** and **clear button** to filter/reset results
- Populated modal windows with listing images (with fallback), neighborhood overview, price, room type, bed type, and bed count

## Provided Code

- The **Listings API** (from Assignment 1) was used as the data source
- Bootstrap 5 CSS/JS via CDN
- Assignment specification with HTML structure guidelines and sample JSON-to-HTML mappings

---

*Built as part of coursework at Seneca Polytechnic — Computer Programming & Analysis*
