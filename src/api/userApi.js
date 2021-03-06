import axiosClient from "./axiosClient";

const userApi = {
  getUsersList() {
    const url = "api/users";
    return axiosClient.get(url);
  },
  getNewUsers() {
    const url = "api/users?new=true";
    return axiosClient.get(url);
  },
  createNewUser(user) {
    const url = "api/users/create";
    return axiosClient.post(url, user);
  },

  updateUser(id, user) {
    const url = `api/users/${id}`;
    return axiosClient.put(url, user);
  },

  deleteUser(id) {
    const url = `api/users/delete/${id}`;
    return axiosClient.delete(url);
  },
};
export default userApi;
