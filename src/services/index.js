import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotes-api-fbbeb901d2fe.herokuapp.com"
})