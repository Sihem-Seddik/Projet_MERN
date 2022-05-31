import React, { useState } from "react";
import Api from "../Axios/Api" ;
import { useNavigate } from "react-router-dom";


export default function AjoutFormateur() {


 const [nom, setNom] = useState("");
 const [prenom, setprenom] = useState("");
 const [image, setImage] = useState("");
 const [inputFile, setInputFile] = useState("");

 let Navigate = useNavigate();
 const handleSubmit = (event) => {
 event.preventDefault();
 const produitObject = {
 nom: nom,
 prenom: prenom,
 image: image,
 }; 

 Api.post('/formateurs/',produitObject).then(res => console.log(res.data));
 console.log(produitObject);
 Navigate('../Formateur/ListeFormateur');

 };
 return (
      

 <div>
 <h2>Ajout d'un formateur </h2>
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
 placeholder="prenom"
 name="prenom"
 type="text"
 value={prenom}
 onChange={e => setprenom(e.target.value)}
 />
 </div>
 
 
 <div>
 <input
 placeholder="Image"
 type="file"
 value={inputFile}
 onChange={e => {setInputFile(e.target.value); setImage('/images/'+e.target.files[0].name)}}
 />
 </div>
 
 <div>
 <button>Submit</button>
 </div>
 </form>

 </div>
 );
}