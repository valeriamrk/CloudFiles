import fs from "fs";
import File from "../models/File.js";
import config from "config";

class FileService {
  // async-await вместо промисов

  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;
    console.log(filePath);

    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          //   fs.mkdirSync(filePath);
          fs.mkdirSync(filePath, { recursive: true });
          return resolve({ message: "File was created" });
        } else {
          return reject({ message: "File already exists" });
        }
      } catch (e) {
        return reject({ message: "File error" });
      }
    });
  }

  deleteFile(file) {
    const path = this.getPath(file);
    if (file.type === "dir") {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }
  
  getPath(file) {
    return config.get("filePath") + "\\" + file.user + "\\" + file.path;
  }
}

export default new FileService();
