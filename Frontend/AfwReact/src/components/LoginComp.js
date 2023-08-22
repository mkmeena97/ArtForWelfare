import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

export default function LoginComp()
{
    const init={
        user_name:"",
        password:""
    }

    const reducer =(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;    
        }
    }

    const[info,dispatch]= useReducer(reducer,init)
    const[msg,setMsg]=useState("")
    const navigate = useNavigate();
    const reduxAction = useDispatch();

    const sendData=(e)=>{
        e.preventDefault();
        const reqOptions={
            method : 'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/checklogin",reqOptions)
        .then(resp=>{
            if(resp.ok)
                return resp.text();
            else
                throw new Error("server Error");
        })
        .then(text=>text.length?JSON.parse(text):{})
        .then(obj=>{
            if(Object.keys(obj).length===0)
            {
                setMsg("Wrong User Name or Password");
            }
            else
            {   
                if(obj.approve===false)
                {
                    alert("Your request has not been approved yet. Please wait until approval")
                }
                else
                {
                    reduxAction(login())
                    if(obj.role_id.role_id==1)
                    {
                        navigate("/admin_home");
                    }
                    else if(obj.role_id.role_id===2)
                    {
                        navigate("/artist_home");
                    }
                    else if(obj.role_id.role_id===3)
                    {
                        navigate("/customer_home");
                    }
                    else if(obj.role_id.role_id===4)
                    {
                        navigate("/ngo_home");
                    }
                }
            }
        })
        .catch((error)=>alert("server error ! try after some time"))
    }



   return(
    <div>
        <div>
            <h3 className="bg-primary text-center p-4">Login Form</h3>
        </div>
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-white">
            <form className="col-md-6 p-4 rounded bg-light">
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="user_name">Username</label>
                    <input type="text" id="user_name" className="form-control" value={info.user_name}
                    onChange={(e)=>{dispatch({type:'update',fld:'user_name',val:e.target.value})}} /> 
                    <div id="user_namehelp" className="form-text">Error msg will displayed here</div>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={info.password}
                    onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}} />
                    <div id="pwdhelp" className="form-text">Error msg will displayed here</div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <a href="/forgotpassword">Forgot password?</a>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e)=>{sendData(e)}}>Sign in</button>
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>        
                </div>
                <div>
                <p>{JSON.stringify(info)}</p>
                <p>{msg}</p>
                </div>
            </form>
        </div>
        
    </div>    

    );
}
