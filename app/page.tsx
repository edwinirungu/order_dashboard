"use client";
import useSWR from "swr";
import axios from "axios";
import fetcher from "@/lib/util";
export default function Home() {
  const { data, error } = useSWR("/", fetcher);

  return (
    <div>
      <h2>Accounts</h2>
      <div>
        {error && <div>{error}</div>}
        {data?.accounts.map((account) => (
          <li key={account.sid}>{account.sid}</li>
        ))}
      </div>
    </div>
  );
}
