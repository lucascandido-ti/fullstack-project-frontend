import axios from "axios";


export const TimeSeries = axios.create({
    baseURL: `http://localhost:8080/data-series`,
    headers: {
      "Content-type": "application/json"
    }
})