import React from "react";
import Card from "react-bootstrap/Card";

const VisualizeData = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VisualizeData;
