import express from "express";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE_PASSWORD);

const app = express();

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
