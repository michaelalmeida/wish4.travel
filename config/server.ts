import axios from "axios";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const baseURL = isLocalhost
  ? import.meta.env.VITE_WISH4TRAVEL_DEV_BASEURL
  : import.meta.env.VITE_WISH4TRAVEL_PROD_BASEURL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
