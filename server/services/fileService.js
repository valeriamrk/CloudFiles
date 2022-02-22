import fs from "fs";
import File from "../models/File.js";
import config from "config";

class FileService {
  // async-await вместо промисов

  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;

    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
          return resolve({ message: "File was created" });
        } else {
          return reject({ message: "File already exists" });
        }
      } catch (e) {
        return reject({ message: "File error" });
      }
    });
  }

  
  getPath(file) {
    return config.get("filePath") + "\\" + file.user + "\\" + file.path;
  }

  
  deleteFile(file) {
    const path = this.getPath(file);
    if (file.type === "dir") {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }
}

export default new FileService();
