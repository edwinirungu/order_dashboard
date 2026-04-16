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
    .get("/companies?_quantity=1000")
    .then((response) => response.data);
}
