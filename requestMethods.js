/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "http://localhost:7002/api";
const TOKEN = "";

export const publicReqest = axios.create({
    baseURL:BASE_URL
})


export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})