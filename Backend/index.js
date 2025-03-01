import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express()

app.use(cors({
  origin: ["https://book-store-web-app-nine.vercel.app"],
  methods: ["GET", "POST"],  
  allowedHeaders: ["Content-Type", "Authorization"],  
  credentials: true
}));


app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
if (!URI) {
  console.error("MongoDB URI is missing. Check your environment variables.");
  process.exit(1);
}
//Connect to MongoDB
try{
mongoose.connect(URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Connect to mongoDB")

}catch (error){
    console.log("Error",error)
    process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})