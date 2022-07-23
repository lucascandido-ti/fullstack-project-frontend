import axios from "axios";


export const TimeSeries = axios.create({
    baseURL: `http://localhost:5000/time-series`,
    headers: {
      "Content-type": "application/json"
    }
})