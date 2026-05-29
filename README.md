# Staff Daily Status Management System

A simple, mobile-friendly real-time staff status management system for the Facility Management Department.

## Purpose
Enable staff to update their daily working status in real-time and allow administrators/supervisors to monitor staff availability through a centralized dashboard.

**Note**: This is NOT an attendance check-in/check-out system. There is NO clock in/out functionality.

## Features

### Staff Features
- Update daily status (Available, On Break, Assigned Task, Sick Leave, etc.)
- Add optional notes for their status
- View personal status history
- Mobile-friendly interface
- Cross-platform support (Web & Android)

### Supervisor/Admin Features
- Real-time dashboard showing all staff statuses
- Filter staff by department/team
- Generate daily status reports
- Manage staff accounts
- View status history and trends

## Tech Stack

- **Frontend**: React.js (Responsive, Mobile-First)
- **Backend**: Node.js + Express.js
- **Database**: SQLite (development) / MongoDB (production-ready)
- **Mobile**: React Native or Responsive Web (PWA)
- **Authentication**: JWT-based with role-based access control (RBAC)

## Project Structure

```
fm2026/
├── backend/                 # Express API server
├── frontend/               # React web application
├── mobile/                 # Mobile app (optional - responsive web version)
├── docs/                   # Documentation
├── docker-compose.yml      # Docker setup
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

### Installation

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token

### Staff Status
- `GET /api/status` - Get all staff statuses (admin)
- `GET /api/status/me` - Get current user status
- `POST /api/status/update` - Update personal status
- `GET /api/status/history` - Get status history

### Admin
- `GET /api/staff` - Get all staff
- `POST /api/staff` - Create new staff member
- `PUT /api/staff/:id` - Update staff
- `DELETE /api/staff/:id` - Delete staff

## Database Schema

### Users Table
- `id` (UUID)
- `email` (String, unique)
- `password` (String, hashed)
- `name` (String)
- `role` (Enum: admin, supervisor, staff)
- `department` (String)
- `created_at` (DateTime)
- `updated_at` (DateTime)

### Status Table
- `id` (UUID)
- `user_id` (Foreign Key)
- `status` (Enum: available, on_break, assigned_task, sick_leave, training, other)
- `notes` (Text)
- `created_at` (DateTime)
- `updated_at` (DateTime)

## Deployment

- Docker containerization ready
- Environment configuration via `.env` files
- Compatible with major cloud platforms (AWS, GCP, Azure, DigitalOcean)

## License

MIT

## Support

For issues and feature requests, please create an issue on this repository.
