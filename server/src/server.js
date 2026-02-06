// 1. MUST BE FIRST: Catch synchronous errors before any other imports
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

import mongoose from 'mongoose'; // Fixed syntax
import app from './app.js';

// If not using Node --env-file flag, uncomment below:
// import 'dotenv/config'; 

const DB = process.env.DATABASE_URL;

if (!DB) {
  console.error('FATAL ERROR: DATABASE_URL is not defined.');
  process.exit(1);
}

// 2. Connect to DB with modern options (Mongoose 6+ handles defaults well)
mongoose.connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB Connection Error:', err.message);
    process.exit(1); // Exit if initial connection fails
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port} in ${process.env.NODE_ENV || 'development'} mode...`);
});

// 3. Handle asynchronous promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  
  // Give the server time to finish existing requests before closing
  server.close(() => {
    process.exit(1);
  });
});

// 4. SIGTERM Handling (For Heroku/Docker/Kubernetes)
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});