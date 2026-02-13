
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

import mongoose from 'mongoose'; 
import app from './app.js';



const DB = process.env.DATABASE_URL;

if (!DB) {
  console.error('FATAL ERROR: DATABASE_URL is not defined.');
  process.exit(1);
}


mongoose.connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB Connection Error:', err.message);
    process.exit(1); 
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port} in ${process.env.NODE_ENV || 'development'} mode...`);
});


process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  
 
  server.close(() => {
    process.exit(1);
  });
});


process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});