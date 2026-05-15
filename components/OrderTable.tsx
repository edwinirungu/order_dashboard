import { OrderJSON } from "@/types/order";
import { useState } from "react";
// import StatusBadge from "./StatusBadge";
// import { Separator } from "./ui/separator";
// import { OrderStatusJSON } from "@/types/order";
import { formatDate, timeDifference } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function OrderTable({ orders }: { orders: OrderJSON[] | [] }) {
  type toggleView = number | null;
  const [openOrder, setOpenOrder] = useState<toggleView>(null);

  return (
    <>
      {orders?.map((order) => (
        <div key={order.id} className="my-[5px] p-1 text-sm">
          <div
            onClick={() => {
              setOpenOrder(openOrder === order.id ? null : order.id);
            }}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-center gap-[5px] pb-[5px] border-b-1 "
          >
            <span className="font-medium">{order.id}</span>
            <div>
              <div className="flex flex-col ">
                <div className="text-slate-500">{order.order_status_id}</div>
                {formatDate(order.created_at)}
              </div>
            </div>
            <div className="align-left">
              {order.order_origins[0].address.split(",")[0]} <br />
              {formatDate(order.order_origins[0].pickup_date)}
            </div>
            <div className="flex flex-col">
              {/* {order.order_destinations.map((dest) => (
                <div key={dest.id}>
                  {dest.address.split(",")[0].slice(0, 15)}...
                  {formatDate(dest.dropoff_date)}
                  <br />
                </div>
              ))} */}
              {
                order.order_destinations[
                  order.order_destinations.length - 1
                ]?.address.split(",")[0]
              }
              <br />
              {formatDate(
                order.order_destinations[order.order_destinations.length - 1]
                  .dropoff_date,
              )}
            </div>

            <div className="flex flex-col">
              <div>{order.vehicle ? order.vehicle.licence_plate : "----"}</div>
              <div>{order.order_lines[0].name}</div>
            </div>
            <div>
              {order.total_distance}km
              <br />{" "}
              <div className="text-slate-500">
                {order.order_destinations.length > 1
                  ? `${order.order_destinations.length} Stops`
                  : ``}
              </div>
            </div>
            <div>KES {Number(order.total_price).toFixed(2)}</div>
          </div>
        </div>
      ))}
      {orders?.map((order) => (
        <Card key={order.id} className="my-[5px]">
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger>
                <div
                  onClick={() => {
                    setOpenOrder(openOrder === order.id ? null : order.id);
                  }}
                  className="grid grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr_1fr]  items-center"
                >
                  <span className="font-medium">{order.id}</span>
                  <div>
                    <div className="flex flex-col ">
                      {formatDate(order.created_at)}
                    </div>
                  </div>
                  <div className="align-left">
                    {order.order_origins[0].address.split(",")[0]} <br />
                    {formatDate(order.order_origins[0].pickup_date)}
                  </div>
                  <div className="flex flex-col">
                    {order.order_destinations.map((dest) => (
                      <div key={dest.id}>
                        {dest.address.split(",")[0].slice(0, 15)}...
                        {formatDate(dest.dropoff_date)}
                        <br />
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex flex-col w-[150px] ">
                    <StatusBadge
                      order_status={order.order_status_id as OrderStatusJSON}
                    />
                  </div> */}
                  <div className="flex flex-col">
                    <div>
                      {order.vehicle ? order.vehicle.licence_plate : "----"}
                    </div>
                    <div>{order.order_lines[0].name}</div>
                  </div>
                  <div>
                    {order.total_distance}km
                    <br />{" "}
                    {order.order_destinations.length > 1
                      ? `${order.order_destinations.length} Stops`
                      : `single drop`}
                  </div>
                  <div>KES {Number(order.total_price).toFixed(2)}</div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {order.order_destinations[0].address}
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
