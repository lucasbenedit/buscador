import axios from "axios";

///11704120/json/

const api = axios.create({
baseURL: "ttps://viacep.com.br/ws/"
});

export default api;