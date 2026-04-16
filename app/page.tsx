"use client";
import useSWR, { useSWRConfig } from "swr";
import Image from "next/image";
import fetcher from "@/lib/utils";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data, isLoading, isValidating, error } = useSWR("accounts", fetcher);

  return (
    <div className="m-2">
      <h2>Accounts</h2>
      <Button onClick={() => mutate("accounts")}>Refresh</Button>
      <div className="flex flex-row flex-wrap gap-5 ">
        {isLoading && <h1>Loading accounts..</h1>}
        {isValidating && <h1>validating..</h1>}
        {error && <div>{error}</div>}
        {data?.data.map((company) => (
          <Card
            key={company.id}
            className="relative mx-auto w-full max-w-sm pt-0"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <Image
              src="https://picsum.photos/200/300"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">{company.country}</Badge>
              </CardAction>
              <CardTitle>{company.name}</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => {
                  router.push(`/company/${company.id}`);
                }}
                className="w-full"
              >
                View Event
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
