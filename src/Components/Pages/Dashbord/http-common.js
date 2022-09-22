import axios from "axios";

export default axios.create({
  baseURL: "https://test.yobitrust.com:8443/BackTunisia/",
  headers: {
    "Content-type": "application/json"
  }
});
