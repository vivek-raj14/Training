import axios from "./axiosInstance";

export const getUsers = () => axios.get("/users");

export const getUserById = (id) => axios.get(`/users/${id}`);

export const createUser = (data) => axios.post("/users", data);

export const updateUser = (id, data) => axios.patch(`/users/${id}`, data);

export const deleteUser = (id) => axios.delete(`/users/${id}`);
