# Work Attendance System

A full-stack web application for tracking employee attendance (check-in/check-out) by ID number.

## Tech Stack

**Client:** React 19, Vite, MUI (Material UI), TanStack Query, React Router

**Server:** Node.js, Express, MySQL2

## Project Structure

```
work-attendance/
├── client/          # React frontend
└── server/          # Node.js backend
```

## Features

- ✅ Employee Check-In by ID number
- ✅ Employee Check-Out by ID number
- ✅ Attendance Report by employee and month

## Getting Started

### Prerequisites
- Node.js
- MySQL

### Database Setup
```sql
CREATE DATABASE work_attendance;
```
Then import the file:
```
SQL/employees.sql
```

### Server Setup
```bash
cd server
npm install
node index.js
```
Server runs on: `http://localhost:6127`

### Client Setup
```bash
cd client
npm install
npm run dev
```
Client runs on: `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ATT/CheckIn` | Register employee check-in |
| POST | `/api/ATT/CheckOut` | Register employee check-out |
| GET | `/api/ATT/Report/:id/:year/:month` | Get attendance report |

## Author

Osayl
