"use client";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "@/lib/utils";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data, isLoading, isValidating, error } = useSWR("accounts", fetcher);

  const handleNavigation = () => {
    router.push("/accounts/[sid]");
  };

  return (
    <div className="m-2">
      <h2>Accounts</h2>
      <Button onClick={() => mutate("accounts")}>Refresh</Button>
      <div className="flex flex-col ">
        {isLoading && <h1>Loading accounts..</h1>}
        {isValidating && <h1>validating..</h1>}
        {error && <div>{error}</div>}
        {data?.accounts.map((account) => (
          <Card
            key={account.sid}
            size="sm"
            className="mx-auto w-full max-w-sm m-5"
          >
            {" "}
            <CardHeader>
              <CardTitle>{account.owner_account_sid}</CardTitle>
              <CardDescription>{account.uri}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{account.friendly_name}</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleNavigation()}
                variant="outline"
                size="sm"
                className="w-full"
              ></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
