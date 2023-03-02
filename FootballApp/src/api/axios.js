import axios from "axios";

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "X-RapidAPI-Key": "97801abe0fc7d81901fd6bc7eab0019b",
    "X-RapidAPI-Host": "v3.football.api-sports.io",
  },
});

export const fetchData = (endpoint, params) => {
  return api.get(endpoint, { params });
};
