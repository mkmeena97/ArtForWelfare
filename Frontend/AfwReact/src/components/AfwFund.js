import React, { useEffect, useState } from "react";

export default function AfwFundComponent() {
  const [ngoFunds, setNgoFunds] = useState([]);
  
  useEffect(() => {
    fetchAfwFunds();
  }, []);

  const fetchAfwFunds = () => {
    fetch("https://localhost:7190/api/AfwFunds")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Server error");
        }
      })
      .then((data) => {
        setNgoFunds(data);
      })
      .catch((error) => alert("Server error. Try later"));
  };

  // Calculate the total amount
  const totalAmount = ngoFunds.reduce((total, fund) => total + fund.amount, 0);

  return (
    <div className="container">
      <h1 className="text-center m-3">Art For Welfare Funds</h1>
      <table className="table table-bordered table-hover mt-2">
        <thead className="thead-dark">
          <tr>
            <th>Date & Time</th>
            <th>Art Id</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ngoFunds.map((fund) => (
            <tr key={fund.id}>
              <td>{new Date(fund.datetime).toLocaleDateString()}</td>
              <td>{fund.artId}</td>
              <td>₹ {fund.amount}</td>
            </tr>
          ))}
          <tr className="table-primary">
            <td>Total</td>
            <td></td>
            <td>₹ {totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
