import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import fileRouter from "./routes/fileRouter.js";
import cors from "cors";
import helmet from "helmet";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
import config from "config";
import fileUpload from "express-fileupload"
import { dangerouslyDisableDefaultSrc } from "helmet/dist/middlewares/content-security-policy";

// настройки, конфигурации (добавить конфиг)
const dbURL = config.get("dbConfig.url");
const srvPort = config.get("srvConfig.port")

//  путь к текущей директории
// const directoryName = dirname(fileURLToPath(import.meta.url));

// определяем режим работы, (добавить конфиг env)
// const isProduction = false;

// выбираем настройки, конфигурацию
// let config;
// if (isProduction) {
//   config = productionConfig;
// } else {
//   config = developmentConfig;
// }

// создаем экземпляр приложения
const app = express();

// предоставление статических файлов
app.use(express.static("static"));

// загрузка файлов
app.use(fileUpload({}))

// устанавливаем заголовки, связанные с безопасностью
app.use(helmet());

// app.use(cors());

// устанавливаем заголовки, связанные с CORS
app.use(
  cors({
    // сервер будет обрабатывать запросы только из разрешенного источника
    // origin: config.allowedOrigin,
    origin: ["http://localhost:3000"],
    methods: ["GET, PUT, PATCH, POST, DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// преобразование тела запроса из JSON в обычный объект
app.use(json());

// разбор параметров строки запроса
app.use(urlencoded({ extended: true }));

// маршруты, routes
app.use("/auth", authRouter);
app.use("/files", fileRouter);

// маршрут, route not found
app.use("*", (req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// обработчик ошибок (доработать)

// запуск сервера
async function startApp() {
  try {
    // подключение к MongoDB
    await mongoose.connect(dbURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(srvPort, () =>
      console.log(`SERVER STARTED ON PORT: ${srvPort}`)
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
