/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_SERVER_URL;
const TOKEN = localStorage.getItem("persist:root") && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicReqest = axios.create({
    baseURL:BASE_URL
})


export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`,Authorization: `Bearer ${TOKEN}`},
})