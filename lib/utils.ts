import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const instance = axios.create({
  baseURL: "https://fakerapi.it/api/v2",
});

export default function fetcher() {
  return instance
    .get("/companies?_quantity=100")
    .then((response) => response.data.data);
}
export function formatDate(date: string) {
  return new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
