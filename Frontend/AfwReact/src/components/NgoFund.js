import React, {useState } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

export default function NgoFundComponent() {
  const [ngoFunds, setNgoFunds] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 //s const [amount, setAmount] = useState("");
 

  const handleSearchClick = (e) => {
    e.preventDefault(); 
    // alert("clicked");
    // console.log(startDate);
    fetch(
      `https://localhost:7190/api/NgoFunds/ondate?startdate=${startDate}&enddate=${endDate}`
    )
      .then((resp) => resp.json())
      .then((ngofund) => setNgoFunds(ngofund));
  };

return (
  <Container className="mt-5">
    <h1 className="mb-4">Transactions</h1>
    <Row>
      <Col>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Col>
            <Col>
              <button variant="primary" onClick={handleSearchClick}>
                Search
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ngo Name</th>
          <th>Art Name</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {ngoFunds.map((ngoFund) => (
          <tr key={ngoFund.id}>
            <td>{ngoFund.ngoName}</td>
            <td>{ngoFund.artName}</td>
            <td>{ngoFund.amount}</td>
            <td>{new Date(ngoFund.datetime).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
);
}

