import * as axios from "axios";
import { loginAsync } from "../../store/authSlice";


const instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  },
});


export const filesAPI = {
  createDir(name, type, parent) {
    return instance.post(`files/createdir`, { name, type, parent });
  },
  getAllFolders(id) {
    return instance.get(`files/getFiles`, { id });
    // id пока не будет прикручена аутентификация, потом убрать
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
    return instance.post(`auth/registration`, {email, password})
  },
  login(email, password) {
    return instance.post('auth/login', {email, password})
  },
  auth() {
    return instance.get('auth/auth', {})
  },
}