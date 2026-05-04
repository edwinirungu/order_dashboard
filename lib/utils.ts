import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { OrderStatusJSON } from "@/types/order";

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

export const OrderStatus = {
  created: "Created",
  finalizingDetail: "Finalizing Details",
  matchingCarriers: "Matching Carriers",
  carrierConfirmed: "Carrier Confirmed",
  driverAssigned: "Driver Assigned",
  onTransitToPickup: "On Transit to Pickup",
  atOrigin: "At Pickup Point",
  inTransit: "In Transit",
  atDestination: "At DropOff",
  delivered: "Delivered",
  cancelled: "Cancelled",
};
export function OrderStatusString(order_status: OrderStatusJSON) {
  switch (order_status) {
    case "created":
      return OrderStatus.created;
      break;
    case "finalizing_details":
      return OrderStatus.finalizingDetail;
      break;
    case "matching_carriers":
      return OrderStatus.finalizingDetail;
      break;
    case "driver_assigned":
      return OrderStatus.driverAssigned;
      break;
    case "delivered":
      return OrderStatus.delivered;
      break;
    case "cancelled":
      return OrderStatus.cancelled;
      break;
  }
}
export function timeDifference(dropoff: string) {
  const now = new Date();
  const dropoff_date = new Date(dropoff);
  const timeDifference = +dropoff_date - +now;
  const difference_in_minutes = Math.floor(timeDifference / 60000);
  const difference_in_hours = Math.floor(timeDifference / (60000 * 60));
  const difference_in_days = Math.floor(timeDifference / (60000 * 60 * 24));
  return difference_in_days;
}
