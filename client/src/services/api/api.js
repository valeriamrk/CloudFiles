import * as axios from "axios";
// import { loginAsync } from "../../store/authSlice_OLD";

const instance = axios.create({
  baseURL: "http://localhost:5500/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const filesAPI = {
  createDir(name, type, parent) {
    return instance.post(`files/createdir`, { name, type, parent });
  },
  getAllFiles(dirId) {
    return instance.get(`files/getAllFiles${dirId ? "?parent=" + dirId : ""}`);
  },
  deleteFile(id) {
    return instance.delete(`files/?id=${id}`);
  },
  renameFolder() {
    return instance.get(`files/renameFolder`);
  },
};

export const usersAPI = {
  registration(email, password) {
    return instance.post(`auth/registration`, { email, password });
  },
  login(email, password) {
    return instance.post("auth/login", { email, password });
  },
  auth() {
    return instance.get("auth/auth", [authConfig]);
  },
};
