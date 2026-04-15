import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const instance = axios.create({
  baseURL: "https://twilio-api.mock.beeceptor.com",
});

export default function fetcher() {
  return instance
    .get("/2010-04-01/Accounts.json")
    .then((response) => response.data);
}
