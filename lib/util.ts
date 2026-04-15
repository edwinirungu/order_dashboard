import axios from "axios";

const instance = axios.create({
  baseURL: "https://twilio-api.mock.beeceptor.com",
});

export default function fetcher() {
  return instance
    .get("/2010-04-01/Accounts.json")
    .then((response) => response.data);
}
