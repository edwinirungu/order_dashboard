import { OrderJSON } from "@/types/order";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { Separator } from "./ui/separator";
import { OrderStatusJSON } from "@/types/order";
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
  //

  return (
    <>
      {orders?.map((order) => (
        <Card key={order.id} className="w-full">
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger>
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
