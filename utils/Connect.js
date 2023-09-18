import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();
const MONGO_URI = process.env.MONGO_URL || ' ';

// console.log(MONGO_URI)

class Connect {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('MongoDB connection error:', error);
      });
  }
}

export default new Connect();