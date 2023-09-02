import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function VarifyNgo() {
  const [vngo, setVngo] = useState([]);
  const navigate = useNavigate();

  const handleVerify = (ngo_id) => {
    console.log(ngo_id);
    fetch("http://localhost:8080/verifyngo?ngo_id=" + ngo_id)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("server error");
        }
      })
      .then(obj => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Ngo Approved",
        }).then(() => {
          navigate("/admin_home");
        });
      })
      .catch((error) => alert("Server error. Try later"));
  };

  useEffect(() => {
    fetch("http://localhost:8080/notverifiedNgo")
      .then(res => res.json())
      .then(vngo => setVngo(vngo));
  }, [handleVerify]);

  return (
    <div>
      <div className="container">
        <h1 className="p-3">NGO Request Approval</h1>
        <table className="table table-bordered table-hover mt-3">
          <thead className="thead-dark">
            <tr>
              <th>NGO Id</th>
              <th>NGO Name</th>
              <th>NGO Domain</th>
              <th>Certificate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vngo.map((v) => (
              <tr key={v.ngo_id}>
                <td>{v.ngo_id}</td>
                <td>{v.ngo_name}</td>
                <td>{v.domain}</td>
                <td>
                  {/* <div style={{ display: v ? "inline" : "none" }}>
                    <img src={`data:image/jpeg;base64,${v && v.certificate}`} width="200" height="200" alt={`Certificate of ${v.ngo_name}`} />
                  </div> */}
 <div className="text-center" style={{ display: v ? "inline" : "none"  }} >
  <img
    src={`data:image/jpeg;base64,${v && v.certificate}`}
    width="300" height="200"
    alt={`Certificate of ${v.ngo_name}`}
  />
  {v && v.certificate && (
    <a className="mx-4"
      href={`data:image/jpeg;base64,${v.certificate}`}
      download={`Certificate_of_${v.ngo_name}.jpeg`}
    >
      Download Certificate
    </a>
  )}
</div>
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleVerify(v.ngo_id)}>
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
