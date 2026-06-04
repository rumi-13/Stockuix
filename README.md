# StockuiX

StockuiX is a MERN-based stock trading platform built for learning and practical demo trading.
It combines a React/Vite frontend with an Express and MongoDB backend.
The app provides a clean dashboard for managing trades, holdings, and positions.
Users can sign up, log in, place orders, and manage their own account securely.
The platform keeps trading data user-specific through token-based authentication.
It is designed as a full-stack stock market style experience with a simple workflow.

## Overview

StockuiX gives users a dashboard-driven trading experience with protected routes, account-based data, and persistent portfolio records.
It is split into a frontend for the trading UI and a backend for authentication, orders, holdings, and positions.
The app uses cookie-based auth so the browser stays signed in across requests.
Each user sees only their own trading activity and portfolio data.
Account deletion removes the user and related trading records.
The project is organized to be easy to run, extend, and demonstrate.

## Project Structure

- `backend/` - Express API, MongoDB models, authentication, orders, holdings, and positions
- `frontend/` - React dashboard and landing pages
- `docs/` - project notes and trading data behavior

## Getting Started

### Backend

1. `cd backend`
2. `npm install`
3. Create a `.env` file with your MongoDB connection string and JWT secret
4. `npm start`

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`

## What the App Does

- user signup, login, logout, and token-based auth
- protected dashboard routes
- create, update, and delete orders
- user-specific holdings and positions
- account deletion with cascade cleanup of trading data
- dashboard summary driven by the logged-in user's holdings data
- cookie-based requests for authenticated backend calls

## Key Features

- modern dashboard interface with a watchlist, summary view, holdings, orders, and positions
- auth-protected routes for dashboard access
- order placement flow for buy and sell actions
- user-specific trading records stored in MongoDB
- delete-account flow with confirmation dialog in the UI
- reusable backend controllers for route logic

## Notes

- The backend expects cookies to be sent with authenticated requests.
- The dashboard currently derives summary values from the logged-in user's holdings.