import { OrderJSON } from "@/types/order";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { Separator } from "./ui/separator";
import { OrderStatusJSON } from "@/types/order";
import { formatDate } from "@/lib/utils";

export default function OrderTable({ orders }: { orders: OrderJSON[] | [] }) {
  type toggleView = number | null;
  const [openOrder, setOpenOrder] = useState<toggleView>(null);
  //

  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] bg-gray-100 dark:bg-zinc-950 dark:text-white-100 py-1 my-1">
        <div>ID</div>
        <div>Details</div>
        <div>Route</div>
        <div>Status</div>
        <div>Vehicle</div>
        <div>Amount</div>
        <div>Load</div>
      </div>
      <div className="border rounded-sm">
        {orders?.map((order) => (
          <div key={order.id}>
            <div
              onClick={() => {
                setOpenOrder(openOrder === order.id ? null : order.id);
              }}
              className="grid grid-cols-[0.5fr_1fr_2fr_1fr_1fr_1fr_1fr] p-1 gap-1 border-t items-center"
            >
              <span className="font-medium">{order.id}</span>
              <div>
                <div className="flex flex-col ">
                  {formatDate(order.created_at)}
                </div>
              </div>
              <div className="flex flex-col">
                {order.order_origins[0].address.split(",")[0]} to{" "}
                {order.order_destinations[0].address.split(",")[0]}
              </div>
              <div className="flex flex-col w-[150px] ">
                <StatusBadge
                  order_status={order.order_status_id as OrderStatusJSON}
                />
              </div>
              <div className="flex flex-col">
                <div>
                  {order.vehicle ? order.vehicle.licence_plate : "----"}
                </div>
                <div> {order.driver?.phone}</div>
              </div>
              <div>KES {Number(order.total_price).toFixed(2)}</div>
              <div>{order.order_loads[0].commodity}</div>
            </div>
            {openOrder === order.id && (
              <div
                onClick={() => {
                  setOpenOrder(openOrder === order.id ? null : order.id);
                }}
                className="min-height-4 p-2"
              >
                <Separator />
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col">
                    <span>Created at : {formatDate(order.created_at)} </span>
                    <span>{order.order_lines[0].name}</span>
                    <span>Shipper: {order.shipper.name}</span>
                    <span>Phone: {order.shipper.phone}</span>
                    <span>Email: {order.shipper.name}</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Driver: {order.driver?.name}</span>
                    <span>Phone: {order.driver?.phone}</span>
                    <span>Email: {order.driver?.email}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
