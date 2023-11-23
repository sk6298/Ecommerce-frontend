/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "http://localhost:7002/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTc1ODk0YzBiNTNiZGE5YjU2ZTIzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDU3ODEzOCwiZXhwIjoxNzAwODM3MzM4fQ.LwAkaRDNm-Zge5aeyxapXwDzWZ5VlS1ZU6Ckx5ycGqg";

export const publicReqest = axios.create({
    baseURL:BASE_URL
})


export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`,Authorization: `Bearer ${TOKEN}`},
})