# Rehearsal Scheduler

A comprehensive web application for bands to efficiently schedule rehearsals, send reminders, track attendance, and suggest optimal rehearsal times.

## 🎵 Overview

Rehearsal Scheduler addresses common challenges faced by bands, including:
- Scheduling conflicts and communication issues
- Attendance tracking and accountability
- Finding optimal rehearsal times
- Organizing rehearsal content and setlists
- Sending timely reminders

The application provides a central hub for all rehearsal-related activities, helping bands maximize their productivity and focus on making music.

## ✨ Features

- **User Authentication and Band Management**
  - Secure login/registration system
  - Band profile creation and member invitations
  - Role-based access control (admins/members)

- **Availability Management**
  - Recurring availability settings
  - Exception dates/times
  - Calendar integration (Google, Apple)

- **Rehearsal Scheduling**
  - Intuitive rehearsal creation interface
  - Optimal time suggestion algorithm
  - Rehearsal modification and cancellation

- **Attendance Tracking**
  - RSVP system
  - Attendance history and analytics
  - Rehearsal check-in

- **Communication Tools**
  - Automated email/SMS reminders
  - Custom notification settings
  - In-app messaging

- **Rehearsal Planning**
  - Agenda and setlist creation
  - Collaborative song suggestions
  - File sharing for rehearsal materials

- **Analytics Dashboard**
  - Attendance trends
  - Optimal rehearsal time analysis
  - Progress tracking

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI components
- FullCalendar.js for calendar views
- Chart.js for analytics

### Backend
- Node.js with Express
- JWT authentication with OAuth support
- PostgreSQL database
- Prisma ORM
- Redis for caching

### DevOps
- AWS or Vercel hosting
- GitHub Actions for CI/CD
- Sentry for error monitoring

## 📋 Prerequisites

- Node.js (v18+)
- npm or yarn
- PostgreSQL (v14+)
- Redis (optional, for enhanced performance)

## ⚙️ Setup Instructions

### Local Development

1. **Clone the repository**
   ```
   git clone https://github.com/dxaginfo/rehearsal-scheduler-june2025-project.git
   cd rehearsal-scheduler-june2025-project
   ```

2. **Install dependencies**
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment setup**
   ```
   # Create .env files from examples
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

   Update the environment files with your database credentials and API keys.

4. **Database setup**
   ```
   # Run database migrations
   cd server
   npx prisma migrate dev
   ```

5. **Start development servers**
   ```
   # Start backend (from server directory)
   npm run dev

   # Start frontend (from client directory)
   npm start
   ```

   The application will be available at http://localhost:3000

### Production Deployment

1. **Build the application**
   ```
   # Build backend
   cd server
   npm run build

   # Build frontend
   cd ../client
   npm run build
   ```

2. **Deploy to your hosting provider**
   - For AWS: Configure AWS Elastic Beanstalk or EC2
   - For Vercel: Connect your repository and deploy
   - For other providers: Follow their deployment guides

## 📱 Mobile Responsiveness

The application is designed to be fully responsive, providing an optimal experience on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security Features

- Secure password storage with bcrypt
- JWT token-based authentication
- HTTPS enforcement
- Input validation and sanitization
- Rate limiting to prevent abuse
- CSRF protection

## 🔄 Integration Capabilities

The application can integrate with:
- Google/Apple Calendar
- Spotify/Apple Music (for setlist creation)
- Email providers (SendGrid, etc.)
- SMS services (Twilio)
- Cloud storage (AWS S3, Google Cloud Storage)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please open an issue on this repository.