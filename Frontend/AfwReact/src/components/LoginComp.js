import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

export default function LoginComp() {
    const init = {
        user_name: "",
        password: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val };
            case 'reset':
                
                return init;
        
            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({
        user_name: "",
        password: ""
    });
    const navigate = useNavigate();
    const reduxAction = useDispatch();

    const sendData = (e) => {
        e.preventDefault();

        if (!info.user_name) {
            setErrors({ ...errors, user_name: "Please enter a username." });
            return;
        }
        if (!info.password) {
            setErrors({ ...errors, password: "Please enter a password." });
            return;
        }

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        };

        fetch("http://localhost:8080/checklogin", reqOptions)
            .then(resp => {
                if (resp.ok)
                    return resp.text();
                else
                    throw new Error("Server Error");
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
                if (Object.keys(obj).length === 0) {
                    setMsg("Wrong User Name or Password");
                } else {
                    localStorage.setItem("loggeduser", JSON.stringify(obj));
                    if (obj.approve === false) {
                        setMsg("Your request has not been approved yet. Please wait until approval");
                    } else {
                        reduxAction(login());
                        switch (obj.role_id.role_id) {
                            case 1:
                                navigate("/admin_home");
                                break;
                            case 2:
                                navigate("/artist_home");
                                break;
                            case 3:
                                navigate("/customer_home");
                                break;
                            case 4:
                                navigate("/ngo_home");
                                break;
                            default:
                                navigate("/default_home");
                                break;
                        }
                    }
                }
            })
            .catch(error => setMsg("Server error! Please try again later."));
    };

    return (
        <div>
            <div>
                <h1 className=" text-center text-primary p-4">Login </h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center vh-95 bg-white">
                <form className="col-md-6 p-4 my-5 rounded bg-light">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="user_name">Username</label>
                        <input
                            type="text"
                            id="user_name"
                            className={`form-control ${errors.user_name ? 'is-invalid' : ''}`}
                            value={info.user_name}
                            onChange={(e) => {
                                dispatch({ type: 'update', fld: 'user_name', val: e.target.value });
                                setErrors({ ...errors, user_name: '' });
                                setMsg('');
                            }}
                        />
                        {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            value={info.password}
                            onChange={(e) => {
                                dispatch({ type: 'update', fld: 'password', val: e.target.value });
                                setErrors({ ...errors, password: '' });
                                setMsg('');
                            }}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <a href="/forgotpassword">Forgot password?</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={sendData}>Sign in</button> &nbsp;&nbsp;
                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
                    <div className="text-center">
                        <p className="text-danger">{msg}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}