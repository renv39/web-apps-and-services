import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PageHeader(prop) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body className="text-center">
            {prop.text}
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
