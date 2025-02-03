import axios from "axios"

export const api = axios.create({
    baseURL: "https://back-rocketnotes.onrender.com"
})