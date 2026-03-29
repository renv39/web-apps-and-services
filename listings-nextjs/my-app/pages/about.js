import Link from "next/link";
import { Card, CardBody, Container } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import { resolve } from "styled-jsx/css";


export async function getStaticProps() {
  const res = await fetch(
    "https://web422-assignment-1-8zqi.onrender.com/api/listings/4069429"
  );
  const data = await res.json();
  return { props: { listing: data } };
}

export default function About(props) {
  return (
    <>
    <Container>
      <PageHeader text="About the Developer: Rendell Velasco" />
      <Card>
        <CardBody>
          <p>
            I am currently a student at Seneca Polytechnic studying in the CPA program.
          </p>
          <Link href="listing/4069429">{props.listing.name}</Link>
        </CardBody>
        <ListingDetails listing={props.listing}></ListingDetails>
      </Card>
      </Container>
    </>
  );
}
