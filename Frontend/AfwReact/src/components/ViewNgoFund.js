import { useEffect, useState } from "react";;

export default function ViewNgoFund() {
  const [vngo, setVngo] = useState([]);
  const[msg,setMsg] = useState([]);

  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;
    console.log(userid);
  
    fetch("https://localhost:7190/api/Ngoes/userid/" + userid)
      .then(response => response.json())
      .then(obj => {
        localStorage.setItem("loggedngo", JSON.stringify(obj));
        console.log(JSON.stringify(obj));
        // setLoggedNgo(obj);
  
        const ngoId = obj.ngoId; // Assuming obj contains the required ngoId
        return fetch("https://localhost:7190/api/NgoFunds/ngoid/" + ngoId);
      })
      .then(response => {
        if (response.status === 204) {
          console.log("No funds available now");
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server error");
        }
      })
      .then(data => {
        if (data === 0) {
          setMsg("No funds available now");
        } else {
          setVngo(data);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setMsg("Server error. Try later");
      });
  }, []);
  return (
    <div>

      <div className="container">
  
      <table className="table table-bordered table-hover mt-3">
  <thead className="thead-dark">
    <tr>
      <th>Date & Time</th>
      <th>Amount Received</th>
    </tr>
  </thead>
  <tbody>
    {vngo !== undefined ? (
      <>
        {vngo.map((v, index) => (
          <tr key={index}>
            <td>{v.datetime}</td>
            <td>₹ {v.amount}</td>
          </tr>
        ))}
        <tr>
          <td><strong>Total</strong></td>
          <td>
            <strong>
              ₹ {vngo.reduce((total, v) => total + v.amount, 0)}
            </strong>
          </td>
        </tr>
      </>
    ) : (
      <tr>
        <td colSpan="2">No funds available</td>
      </tr>
    )}
  </tbody>
</table>
  <p className="text-danger">{msg}</p>
</div>

    </div>
  );
}