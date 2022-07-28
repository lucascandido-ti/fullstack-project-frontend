import axios from "axios";

// 👎 Poderia ter usado o `API_BASE_URL` do `.env` na instância do Axios
// Além disso, não é necessário declarar explicitamente o header "Content-Type: application/json"
export const TimeSeries = axios.create({
    baseURL: `http://localhost:8080/data-series`,
    headers: {
      "Content-type": "application/json"
    }
})