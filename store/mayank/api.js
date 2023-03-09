import axios from "axios"
import { MAYANK_USERNAME, MAYANK_PASSWORD } from "react-native-dotenv"
const mayank = axios.create({
  baseURL: "http://ebizel.com/",
  auth: { username: MAYANK_USERNAME, password: MAYANK_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
