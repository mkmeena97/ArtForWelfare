import { useEffect } from "react"

export default function NgoHome(){
    const[artist,setArtist]=useState(null);

    
    useEffect(()=>{
       const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;   

        fetch("http://localhost:8080/"+userid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedartist",JSON.stringify(obj))
            setArtist(obj);
        })
    },[])
}

    return(
        <div>
            
             <p>Welcome {ngo && ngo.fname} {artist && artist.lname}</p>
            <h1>Artist's Home Page</h1>
            <Link to="/" >View Fund</Link>
            <Link to="/" >view Artist</Link>
            <Link to="/" >Total fund Received</Link>

        </div>
        
    )
}