import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../Axios/Api";
export default function ModifierForum({match}){
    const [nom, setnom] = useState("");
    const [email, setemail] = useState("");
    const [numtel, setnumtel] = useState("");
    
 let Navigate = useNavigate();
 const {id} = useParams();
 console.log(id)
 useEffect(()=>{
Api.get('/forums/'+id).then(res => {
 setnom(res.data.nom);
 setemail(res.data.email);
 setnumtel(res.data.numtel);
 
 })
 },[id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const parf = {
 id:id ,
nom: nom,
email:email,
numtel:numtel
 };
Api.put('/forums/'+id,parf ) 
 .then(res => console.log(res.data));
 Navigate("../Forum/ListeForum");
 
 }
 return (
 <div>
 <h2>Modification d'un forum </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom "
 type="text"
 value={nom}
 onChange={e => setnom(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="email"
 type="text"
 value={email}
 onChange={e => setemail(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="quantite  "
 type="text"
 value={numtel}
 onChange={e => setnumtel(e.target.value)}
 />
 </div>
 
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}