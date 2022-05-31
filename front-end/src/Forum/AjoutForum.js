import React, { useState } from "react";
import Api from "../Axios/Api" ;
import { useNavigate } from "react-router-dom";


export default function AjoutForum() {


 const [nom, setNom] = useState("");
 const [email, setEmail] = useState("");
 const [numtel, setNumtel] = useState("");
 
 let Navigate = useNavigate();
 const handleSubmit = (event) => {
 event.preventDefault();
 const produitObject = {
 nom: nom,
 email: email,
 numtel: numtel,
 }; 

 Api.post('/forums/',produitObject).then(res => console.log(res.data));
 console.log(produitObject);
 Navigate('../Forum/Listeforum');

 };
 return (
      

 <div>
 <h2>Ajout d'un forum </h2>
 <form onSubmit={handleSubmit}><div>
 
 </div>
 <div>
 <input
 placeholder="nom"
 type="text"
 value={nom}
 onChange={e => setNom(e.target.value)}/>
 </div>
 <div>
 <input
 placeholder="email"
 name="email"
 type="text"
 value={email}
 onChange={e => setEmail(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="numtel"
 type="text"
 value={numtel}
 onChange={e => setNumtel(e.target.value)}
 />
 </div>
 
 
 
 <div>
 <button>Submit</button>
 </div>
 </form>

 </div>
 );
}