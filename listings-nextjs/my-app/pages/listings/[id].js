import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";
import { Card } from "react-bootstrap";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://web422-assignment-1-8zqi.onrender.com/api/listings/${id}`
  );

  if (isLoading) {
    return null;
  }
  if (error || !data || data.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageHeader text={data.name} />
      <Card>
        <Card.Body>
          <ListingDetails listing={data} />
        </Card.Body>
      </Card>
    </>
  );
}
