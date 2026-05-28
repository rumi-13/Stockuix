# StockuiX

A MERN stock trading platform with a React/Vite frontend and an Express/MongoDB backend.

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

## Notes

- The backend expects cookies to be sent with authenticated requests.
- The dashboard currently derives summary values from the logged-in user's holdings.