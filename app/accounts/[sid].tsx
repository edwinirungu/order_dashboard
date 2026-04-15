import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>Account: {router.query.sid}</h1>
    </div>
  );
}
