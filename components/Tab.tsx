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
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function CompanyCard({ company }) {
  const router = useRouter();
  return (
    <Card key={company.id} className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src="https://picsum.photos/200/300"
        alt="Event cover"
        height={800}
        width={800}
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
  );
}
