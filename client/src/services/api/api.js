import * as axios from "axios";
import { loginAsync } from "../../store/authSlice";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
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
  deleteFolder() {
    return instance.delete(`files/deleteFolder`);
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
