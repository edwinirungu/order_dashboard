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
}
