import { OrderStatusJSON } from "@/types/order";

export default function StatusBadge({
  order_status,
}: {
  order_status: OrderStatusJSON;
}) {
  function getBadgeStyle() {
    const base =
      "inline-flex items-center text-center px-2.5 py-0.5 text-[16px] rounded-[5px]";

    switch (order_status) {
      case "delivered":
        return `${base} bg-[5da271]-50 border border-[#cfe1b9] text-[#5da271]`;

      case "created":
      case "finalizing_details":
      case "driver_assigned":
      case "matching_carriers":
        return `${base} bg-orange-50 border bg-orange-50 text-orange-500`;

      case "cancelled":
        return `${base} border bg-red-100 bg-red-50 text-red-500`;

      default:
        return `${base} bg-gray-50 text-gray-500`;
    }
  }

  return <span className={getBadgeStyle()}>{order_status}</span>;
}
