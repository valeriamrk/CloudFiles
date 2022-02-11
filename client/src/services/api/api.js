import * as axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:5000/",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWNhOTE3NmExMDliZjQ2YjVjNTExNiIsImlhdCI6MTY0NDI0NTg5OCwiZXhwIjoxNjQ0MjQ5NDk4fQ.sFxPmY-ax_7yPlmTvH1iSdqrMRkRkvCGeLaFp3QTyTM",
//   },
// });

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  // headers: {
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWNhOTE3NmExMDliZjQ2YjVjNTExNiIsImlhdCI6MTY0NDI0NTg5OCwiZXhwIjoxNjQ0MjQ5NDk4fQ.sFxPmY-ax_7yPlmTvH1iSdqrMRkRkvCGeLaFp3QTyTM",
  // },
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
  }
}