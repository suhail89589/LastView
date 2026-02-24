import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";



import authRoutes from "./routes/Auth.routes.js"
import auth from "./middlewares/Auth.js"

dotenv.config();
const app = express();
const PORT = Process.env.PORT || 5000;

app.use(helmet());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS,
    
    credentials: true,
  }),
);
app.use(express.json());

app.use('/api/auth', authRoutes)

app.get('/api/private', auth, (req, res)=>
{
  res.send('This is a protected route')
})

app.get('/', (req, res)=>{
  res.send("Server is Live!")
});


export default app