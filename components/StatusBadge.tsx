import { OrderStatusJSON } from "@/types/order";
export default function StatusBadge({ order_status }) {
  let status_style: string = "";
  switch (order_status) {
    case order_status === "created" ||
      order_status === "finalizing_details" ||
      order_status === "matching_carriers" ||
      order_status === "driver_assigned":
      status_style = "text-orange-500 bg-orange-100";
      break;
    case order_status === "in_transit" ||
      order_status === "at_origin" ||
      order_status === "at_destination" ||
      order_status === "driver_assigned":
      status_style = "text-blue-500 bg-blue-100";
      break;
    case order_status === "delivered":
      status_style = "text-green-500 bg-green-100";
      console.log("delivred");
      break;
    case order_status === "cancelled":
      status_style = "text-red-500 bg-red-100";
      break;
    default:
      break;
  }
  console.log(status_style);

  return (
    <div
      className={`w-auto border rounded-[20px]  p-1 text-center ${status_style}`}
    >
      {order_status}
    </div>
  );
}
