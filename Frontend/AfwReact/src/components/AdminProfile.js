import { useEffect, useState } from "react";

export default function AdminProfile() {
//    const { userId } = useParams();
  const [admin, setAdmin] = useState(null);
  const[msg,setMsg]=useState(null);
  const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;
  const username = JSON.parse(localStorage.getItem("loggeduser")).user_name;
  const email = JSON.parse(localStorage.getItem("loggeduser")).email;

  console.log(userid)
  useEffect(() => {
    fetch("https://localhost:7190/api/Admins/userid/" + userid)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAdmin(data);
      })
      .catch(error => {
        console.error("Error:", error);
        setMsg("Server Error")
      });
  }, []);
  console.log(admin);
  return (
    <div className="container mt-5">
      {admin ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{admin.fname} {admin.lname}</h2>
            <p className="card-text"><strong>Username:</strong> {username}</p>
            <p className="card-text"><strong>Email:</strong> {email}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <p>{msg}</p>
    </div>
  );
}
