# Digital Health Record System

A comprehensive digital health record management system built with a modern web stack, featuring a Node.js backend and a Next.js frontend. This application enables healthcare providers to manage patient records, appointments, prescriptions, and more through an intuitive interface.

## Features

- **Patient Management**: Create and manage patient profiles with detailed medical history
- **Doctor Portal**: Dedicated interface for healthcare providers to access patient data
- **Appointment Scheduling**: Book and manage appointments between patients and doctors
- **Medical Records**: Store and retrieve comprehensive medical records
- **Prescription Management**: Create and track prescriptions
- **Vitals Monitoring**: Record and monitor patient vital signs
- **Authentication & Authorization**: Secure user authentication with role-based access
- **Real-time Alerts**: Notification system for important health updates
- **Google Maps Integration**: Visualize health data geographically with heatmaps
- **AI Assistant**: Integrated AI services for health insights
- **Multi-language Support**: Translation services for accessibility

## Tech Stack

### Backend (DHRBackend)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT-based auth
- **API**: RESTful API endpoints

### Frontend (DHRFrontend)
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: Google Maps API
- **State Management**: React Context API

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Supabase account and project
- Google Maps API key

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-health-record.git
   cd digital-health-record
   ```

2. **Backend Setup**
   ```bash
   cd DHRBackend
   npm install
   ```

   - Create a `.env` file in the DHRBackend directory with the following variables:
     ```
     SUPABASE_URL=your_supabase_url
     SUPABASE_ANON_KEY=your_supabase_anon_key
     JWT_SECRET=your_jwt_secret
     PORT=3001
     ```

   - Set up the database by running the SQL script:
     ```bash
     # Run database-setup.sql in your Supabase SQL editor or preferred database tool
     ```

3. **Frontend Setup**
   ```bash
   cd ../DHRFrontend
   pnpm install
   ```

   - Create a `.env.local` file in the DHRFrontend directory:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:3001
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

## Running the Application

1. **Start the Backend**
   ```bash
   cd DHRBackend
   npm start
   ```
   The backend will run on http://localhost:3001

2. **Start the Frontend**
   ```bash
   cd DHRFrontend
   pnpm dev
   ```
   The frontend will run on http://localhost:3000

## API Documentation

The backend provides RESTful API endpoints for:
- Authentication (`/api/auth`)
- Patients (`/api/patients`)
- Doctors (`/api/doctors`)
- Appointments (`/api/appointments`)
- Medical Records (`/api/medical-records`)
- Prescriptions (`/api/prescriptions`)
- Vitals (`/api/vitals`)
- Workers (`/api/workers`)
- Translation (`/api/translate`)

## Project Structure

```
Digital-Health-Record-main/
├── DHRBackend/              # Node.js Express backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── services/          # External services (Supabase)
│   ├── database-setup.sql # Database schema
│   └── package.json
├── DHRFrontend/            # Next.js frontend
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── services/          # API and external services
│   ├── styles/            # CSS styles
│   └── utils/             # Utility functions
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@digitalhealthrecord.com or create an issue in this repository.

## Roadmap

- [ ] Mobile application development
- [ ] Advanced analytics dashboard
- [ ] Integration with wearable devices
- [ ] Telemedicine features
- [ ] Multi-tenant support for healthcare organizations



