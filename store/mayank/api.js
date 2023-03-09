import axios from "axios"
const mayank = axios.create({
  baseURL: "https://google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
