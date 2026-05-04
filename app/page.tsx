"use client";
import useSWR, { useSWRConfig } from "swr";
import { Sun, Moon } from "lucide-react";
import data from "../store/order.json";
import { useState, useCallback, useRef } from "react";
// import fetcher from "@/lib/utils";
// import CompanyCard from "@/components/Tab";
import { OrderJSON, OrderStatusJSON } from "@/types/order";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import OrderTable from "@/components/OrderTable";

import useTheme from "next-theme";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { mutate } = useSWRConfig();
  // const { data, isLoading, isValidating, error } = useSWR("accounts", fetcher);
  const [searchInput, setSearchInput] = useState<string>("");
  const handleForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }, []);

  const filtered_orders = data.items?.filter((order) =>
    order.order_status_id.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2 m-4">
      <div className=" flex flex-row gap-1 ">
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <Sun className="scale-0 dark:scale-100" />
          <Moon className="absolute scale-100 dark:scale-0 " />
        </Button>{" "}
        <h2 className="text-xl">Orders</h2>
        {/* <Button onClick={() => mutate("accounts")}>Refresh</Button> */}
        <InputGroup className="max-w-xs">
          <InputGroupInput
            onChange={(e) => handleForm(e)}
            placeholder="Search company..."
          />
          <InputGroupAddon></InputGroupAddon>
          <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
      </div>
      <div>
        {" "}
        <OrderTable orders={filtered_orders} />{" "}
      </div>

      <div className="flex flex-row flex-wrap gap-5 ">
        {/* {isLoading && <h1>Loading accounts..</h1>}
        {isValidating && <h1>validating..</h1>} */}

        {/* {error && <div>{error}</div>}
        {data &&
          
            .map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))} */}
      </div>
    </div>
  );
}
