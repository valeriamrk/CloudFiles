import express from "express";
import mongoose from "mongoose";
import authRouter from "./authRouter.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://clouduser:db%215835File@cluster0.ampiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

//сервер парсит json, который прилетает в запрос
app.use(express.json());

//для прослушивания роутера
app.use("/auth", authRouter);
app.use(express.static("static"));

// const start = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://clouduser:db%215835File@cluster0.ampiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//     app.listen(PORT, () => console.log("server started on port 5000"))
//   } catch (e) {
//     console.log(e)
//   }
// }

// start()

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
