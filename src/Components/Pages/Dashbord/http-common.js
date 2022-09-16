import axios from "axios";

export default axios.create({
  baseURL: "https://96c8ef231e8a.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});
