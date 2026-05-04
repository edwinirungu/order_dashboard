<<<<<<< HEAD
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
=======
import { OrderStatusString } from "@/lib/utils";
export default function StatusBadge({ order_status }) {
  function getBadgeStyle() {
    switch (order_status) {
      case "created":
      case "finalizing_details":
      case "matching_carriers":
      case "driver_assigned":
        return "text-orange-500 bg-orange-100";
        break;
      case "in_transit":
      case "at_origin":
      case "driver_assigned":
        return "text-blue-500 bg-blue-100";
        break;
      case "delivered":
        return "text-green-500 bg-[#dcfce7]";
        break;
      case "cancelled":
        return "text-red-500 bg-red-100";
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={`w-auto py-[5px]  rounded-sm text-center text-sm ${getBadgeStyle()}`}
    >
      {OrderStatusString(order_status)}
    </div>
  );
>>>>>>> 26849a1caffe32c997930506bf318e27e803c130
}
