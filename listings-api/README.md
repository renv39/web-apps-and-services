# Listings API

A RESTful Web API built with Node.js and Express for managing Airbnb-style property listings, backed by MongoDB Atlas with Mongoose ODM.

## Demo

<!-- Add a short video or GIF showing API requests in Postman/Thunder Client -->
> _Demo video coming soon_

## Learning Outcomes

- Designing and implementing a full **CRUD REST API** (POST, GET, PUT, DELETE)
- Connecting to a cloud database using **MongoDB Atlas** and **Mongoose**
- Server-side **pagination** and optional **search filtering** via query parameters
- Using proper **HTTP status codes** (201, 204, 404, 500) for meaningful API responses
- Managing sensitive configuration with **environment variables** (dotenv)
- Enabling **CORS** for cross-origin client access
- Deploying a Node.js server to a **cloud hosting platform**

## Technologies

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- Git

## My Responsibilities

- Set up the Express server from scratch with middleware (CORS, JSON body parsing, dotenv)
- Defined all **5 API routes** with full error handling:
  - `POST /api/listings` — create a new listing
  - `GET /api/listings?page=&perPage=&name=` — paginated listing retrieval with optional name filter
  - `GET /api/listings/:id` — single listing by ID
  - `PUT /api/listings/:id` — update a listing
  - `DELETE /api/listings/:id` — delete a listing
- Connected the database module to MongoDB Atlas using a connection string stored in `.env`
- Initialized the database connection before starting the server (promise-based)
- Configured `.gitignore` and deployed to a cloud platform

## Provided Code

- `listingsDB.js` — database module with 6 promise-based functions for interacting with the `listingsAndReviews` collection
- `listingSchema.js` — Mongoose schema definition for the listing documents
- MongoDB Atlas sample Airbnb dataset (5,555 documents)

---

*Built as part of coursework at Seneca Polytechnic — Computer Programming & Analysis*
