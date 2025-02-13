import axios from "axios";

const axios_url = axios.create({
  baseURL: "http://localhost:5000/api/", // Ensure the base URL is correct for your local setup
});

export default axios_url;
