# Deployment Guide

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL 15+
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/facilitymanagementrsaj/fm2026.git
   cd fm2026
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

5. **Start the development servers**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:5000/api

## Docker Deployment

### Prerequisites
- Docker
- Docker Compose

### Steps

1. **Build and start services**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:5000/api
   - Database: localhost:5432

3. **View logs**
   ```bash
   docker-compose logs -f
   ```

4. **Stop services**
   ```bash
   docker-compose down
   ```

## Production Deployment

### Cloud Platforms

The application can be deployed to:
- **AWS**: EC2, ECS, or Elastic Beanstalk
- **Google Cloud**: App Engine, Cloud Run, or GKE
- **Azure**: App Service or Container Instances
- **DigitalOcean**: App Platform or Droplets
- **Heroku**: Platform as a Service

### Environment Configuration

Ensure the following production variables are set:

```env
NODE_ENV=production
PORT=5000
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=fm2026_prod
DB_USER=prod_user
DB_PASSWORD=strong_password
JWT_SECRET=strong_random_secret
CORS_ORIGIN=https://yourdomain.com
```

### Database Setup

1. Create a production PostgreSQL database
2. Run migrations (if available)
3. Set up regular backups

### SSL/TLS Configuration

- Use HTTPS for all communications
- Obtain SSL certificate (Let's Encrypt recommended)
- Configure reverse proxy (Nginx or Apache)

### Monitoring & Logging

- Set up error tracking (e.g., Sentry)
- Configure log aggregation (e.g., ELK Stack)
- Monitor application performance
- Set up alerting for critical issues

## Mobile Access (Android)

The responsive web app works on Android devices through:

1. **Mobile Browser**
   - Access via standard browser (Chrome, Firefox, Samsung Internet)
   - URL: https://yourdomain.com

2. **Progressive Web App (PWA)**
   - Install from home screen
   - Works offline with service workers
   - Native app-like experience

3. **Future: Native Android App**
   - Can be built with React Native
   - Direct app store distribution

## Backup & Recovery

### Database Backups

```bash
# Backup
pg_dump -U admin fm2026_prod > backup.sql

# Restore
psql -U admin fm2026_prod < backup.sql
```

### Regular Backup Schedule
- Daily automated backups
- Weekly offsite backups
- Monthly full backups retained for 90 days
