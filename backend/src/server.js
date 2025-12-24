import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();



const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()
if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: process.env.APPLICATION_URL,
  }))
}
// middleware to parse JSON
app.use(express.json());
app.use(rateLimiter);


//app.use((req,res,next) => {
//console.log("We just got a new req")
//next();
//})

app.get("/", (req, res) => {
  res.json({ message: "Server is ready" });
});

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV !== "production") {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  });
}

export default app;




