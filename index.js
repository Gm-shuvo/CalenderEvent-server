import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import Connect from "./utils/Connect.js";
import postRoute from "./routes/postRoute.js"

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())

// Routes
app.use('/api', postRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

//Connect to Mongo
Connect;

//Listening app
app.listen(port,()=>{
  console.log(`Listning server at port ${port}`)
})