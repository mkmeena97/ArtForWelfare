import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const [emailid, setEmail] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [msg, setMsg] = useState(""); // For error/success messages
    const navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('email', emailid);

        fetch(`http://localhost:8080/checkemail?${params.toString()}`)
            .then(resp => {
                if (resp.ok) {
                    setMsg("");
                    return resp.json();
                } else {
                    throw new Error("server Error");
                }
            })
            .then(data => {
                if (Object.keys(data).length === 0) {
                    setMsg("Email not found");
                } else {
                    setSecurityQuestion(data.que_text);                     //////////////////////////////////////
                    setIsQuestionAnswered(true);
                }
            })
            .catch(error => {
                console.error(error);
                setMsg("Incorrect Email ! please enter correct Email Id");
            });
    

    }
    const handleAnswerSubmit = (e) => {
        
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ emailid, answer })
        };
        fetch("http://localhost:8080/checksecurityanswer" , reqOptions)
            .then(resp => {
                if (resp.ok) {
                    setMsg("");
                    return resp.json();
                } else {
                    throw new Error("server Error");
                }
            })
            .then(data => {
                if (Object.keys(data).length === 0) {
                    setMsg("Wrong Answer");
                } else {
                    setMsg(""); // Clear any previous error messages
                    setIsPasswordReset(true); // Allow the user to reset their password
                }
            })
            .catch(error => {
                console.error(error);
                setMsg("Wrong Answer.please enter right answer");
            });
    };
    
    const handlePasswordReset = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ emailid, newPassword }) // Send email and new password
        };
        fetch("http://localhost:8080/resetpassword", reqOptions) // Use the appropriate endpoint
            .then(resp => {
                if (resp.ok) {
                    setMsg("");
                    return resp.json();
                } else {
                    throw new Error("server Error");
                }
            })
            .then(data => {
                console.log(data.status)
                console.log(data)
                if (data===true) {
                        alert("Password successfully reset !");
                        navigate('/');
                    
                } else {
                    setMsg("Password reset failed. Please try again."); // Display failure message
                }
            })
            .catch(error => {
                console.error(error);
                setMsg("Server error! Please try again later.");
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    {!isQuestionAnswered && (
                        <form onSubmit={handleEmailSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={emailid.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    )}
                    {isQuestionAnswered && !isPasswordReset && (
                        <form onSubmit={handleAnswerSubmit}>
                            <p className="mb-3">{securityQuestion}</p>
                            <p className="mb-3">Answer the security question:</p>
                            <input
                                type="text"
                                className="form-control mb-3"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    )}
                    {isPasswordReset && (
                        <form onSubmit={handlePasswordReset}>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </form>
                    )}
                </div>
                <p>{msg}</p>
            </div>
        </div>
    );
}

export default ForgotPassword;
