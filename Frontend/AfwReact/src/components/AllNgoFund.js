import React, { useEffect, useState } from "react";

export default function NgoFundComponent() {
  const [ngoFunds, setNgoFunds] = useState([]);
  
  useEffect(() => {
    fetchNgoFunds();
  }, []);

  const fetchNgoFunds = () => {
    fetch("https://localhost:7190/api/NgoFunds")
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

  return (
    <div>
      <h1>NGO Funds</h1>
      <table className="table table-bordered table-hover mt-3">
        <thead className="thead-dark">
          <tr>
            <th>NGO Id</th>
            <th>Art Id</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {ngoFunds.map((fund) => (
            <tr key={fund.id}>
              <td>{fund.ngoId}</td>
              <td>{fund.artId}</td>
              <td>{fund.amount}</td>
              <td>{fund.datetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
