import { useEffect, useState } from "react";

export default function NgoProfile() {
//    const { userId } = useParams();
  const [ngo, setNgo] = useState(null);
  const[msg,setMsg]=useState(null);
  const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;
  const username = JSON.parse(localStorage.getItem("loggeduser")).user_name;
  const email = JSON.parse(localStorage.getItem("loggeduser")).email;
  const contact = JSON.parse(localStorage.getItem("loggedngo")).contact;
  const account = JSON.parse(localStorage.getItem("loggedngo")).accountNo;
  
  useEffect(() => {
    fetch("https://localhost:7190/api/Ngoes/userid/" + userid)
      .then(response => response.json())
      .then(data => {
        setNgo(data);
      })
      .catch(error => {
        console.error("Error:", error);
        setMsg("Server Error")
      });
  }, []);

  return (
    <div className="container mt-5">
      {ngo ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{ngo.ngoName}</h2>
            <p className="card-text">{ngo.domain}</p>
            <p className="card-text"><strong>Username:</strong> {username}</p>
            <p className="card-text"><strong>Email:</strong> {email}</p>
            <p className="card-text"><strong>Phone:</strong> {contact}</p>
            <p className="card-text"><strong>Account Number:</strong> {account}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <p>{msg}</p>
    </div>
  );
}
