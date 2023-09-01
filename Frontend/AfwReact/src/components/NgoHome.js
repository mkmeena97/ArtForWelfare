import { useEffect,useState } from "react"

import {Link,Route,Routes} from "react-router-dom"

export default function NgoHome(){
    const[ngo,setNgo]=useState(null);

    
    useEffect(()=>{
       const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;   

        fetch("http://localhost:8080/getNGO"+userid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedngo",JSON.stringify(obj))
            setNgo(obj);
        })
    },[])


    return(
        <div>
            
             <p>Welcome {ngo && ngo.fname}</p>
            <h1>Artist's Home Page</h1>
            <Link to="/" >View Fund By Artist</Link>
            <Link to="/" >view Artist</Link>
            <Link to="/" >Total fund Received</Link>

        </div>
        
    )
}