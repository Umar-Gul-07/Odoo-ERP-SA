# Edu ERP Backend

Simple Express.js backend with Sequelize ORM and SQLite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure:
```env
NODE_ENV=development
PORT=5000
SQLITE_DB_PATH=./database.sqlite
JWT_SECRET=your-secret-key-minimum-32-characters
JWT_EXPIRE=7d
CORS_ORIGIN=*
```

3. Start server:
```bash
npm run dev
```

## API Endpoints

### Students
- `GET /api/v1/students` - Get all students (with pagination)
- `GET /api/v1/students/:id` - Get student by ID
- `POST /api/v1/students` - Create student
- `PUT /api/v1/students/:id` - Update student
- `DELETE /api/v1/students/:id` - Delete student

## Project Structure

```
Backend-with-SQLite/
├── config/
│   ├── database.js      # Sequelize connection
│   └── env.js           # Environment variables
├── controllers/         # Business logic
├── middlewares/         # Express middlewares
├── models/              # Sequelize models
├── routes/              # API routes
├── utils/               # Utilities
├── app.js               # Express app
└── server.js            # Server entry point
```
