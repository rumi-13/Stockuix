# StockuiX

StockuiX is a MERN-style demo trading platform built for learning and demonstrations (NOT real-money trading).
It combines a React + Vite frontend with an Express + MongoDB backend.
The app provides a dashboard for creating demo orders and viewing user-specific holdings and positions.
Users can sign up, sign in, place orders, and delete their account. Authentication uses a JWT stored in an httpOnly cookie.
This repo is intended as an educational full-stack sample rather than a production trading system.

## Overview

StockuiX provides a dashboard-driven demo experience with protected routes and persistent, account-scoped portfolio records.
Architecture summary:
- Frontend: React + Vite app in `frontend/` (static site-ready)
- Backend: Express API in `backend/` that exposes `/api/*` endpoints and connects to MongoDB

Auth & data notes:
- Authentication: JWT issued by the backend and sent as an httpOnly cookie. Backend middleware reads the cookie to protect routes.
- Data isolation: every request uses the authenticated user ID to scope orders, holdings and positions.
- Account deletion: deletes the user and cascade-cleans related records (orders, holdings, positions).

## Project Structure

- `backend/` - Express API, MongoDB models, authentication, orders, holdings, and positions
- `frontend/` - React dashboard and landing pages
- `docs/` - project notes and trading data behavior

## Getting Started

### Backend (local)

1. `cd backend`
2. `npm install`
3. Create a `.env` file with at least:
	- `MONGO_URI` - MongoDB connection string
	- `TOKEN_KEY` - JWT secret
	- `NODE_ENV=development` (optional locally)
4. Run in development: `npm run dev` (requires `nodemon`)
5. Run in production: `npm start` (uses `node server.js`)

### Frontend (local)

1. `cd frontend`
2. `npm install`
3. For development: `npm run dev`
4. For production build: `npm run build` (output goes to `frontend/dist`)

Environment variables (frontend build)
- `VITE_API_URL` — the backend base URL used at build time (e.g. `https://your-backend.onrender.com`). If not set, the app falls back to a sensible default.

## What the App Does

- user signup, login, logout (JWT in httpOnly cookie)
- protected dashboard routes
- create and delete demo orders (buy/sell flow)
- user-specific holdings and positions persisted to MongoDB
- account deletion with cascade cleanup of trading records
- dashboard summary derived from holdings
- frontend uses `withCredentials` to include auth cookie on API calls

## Key Features

- React + Vite frontend with a modern dashboard layout
- Protected routes and cookie-based authentication
- Order placement UI (demo buy/sell) and order listing
- Holdings and positions persisted per user
- Delete-account flow with server-side cascade cleanup

Important limitations (what this project does NOT provide)
- Not a real brokerage — no real market connectivity, no money transfers, and no regulatory compliance.
- No email verification, password reset flows, or multi-factor auth implemented.
- Minimal input validation and no rate limiting — not production hardened.
- No automated tests or CI configured.

## Deployment notes (Render)

1. Deploy backend as a Render Web Service (select `backend/` folder):
	- Start Command: `npm start`
	- Environment: set `MONGO_URI`, `TOKEN_KEY`, `FRONTEND_URL` (e.g. `https://your-frontend.onrender.com`), `NODE_ENV=production`.

2. Deploy frontend as a Render Static Site (select `frontend/` folder):
	- Build Command: `npm run build`
	- Publish Directory: `dist`
	- Environment: set `VITE_API_URL` to your backend URL (e.g. `https://your-backend.onrender.com`) and redeploy.

3. Cookies & CORS:
	- Backend sets `Secure` and `SameSite=None` for cookies in production and uses `app.set('trust proxy', 1)` so cookies work behind Render's proxy.
	- Backend CORS must allow your frontend origin and `credentials: true` (this repo's `backend/app.js` already reads `FRONTEND_URL`).

4. Common troubleshooting:
	- If build fails on Render, ensure package.json and package-lock.json are committed so Render installs the correct devDependencies (e.g., Tailwind Vite plugin).
	- If cookies are not being set, check DevTools network tab for `Set-Cookie` attributes and ensure `withCredentials: true` is used on the client.

## Suggested next steps (production hardening)

- Add input validation and server-side request validation.
- Add rate-limiting and basic abuse protections.
- Add user email verification and password reset flows.
- Add automated tests and a CI pipeline.
- Add logging, monitoring, and secrets management for production.
