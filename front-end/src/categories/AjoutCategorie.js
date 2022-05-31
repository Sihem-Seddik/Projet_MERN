import React, { useState } from "react";
import axios from "axios";
import Api from "../Axios/Api";
import { useNavigate } from "react-router-dom";


export default function AjoutCategorie() {
    const [id, setId] = useState("");
    
 
 const [nomcategorie, setnomcategorie] = useState("");
 const [imagecategorie, setimagecategorie] = useState("");
 const[v,setV]=useState("");
 const [inputFile, setInputFile] = useState();
 let Navigate = useNavigate();
 const handleSubmit = (event) => {
 event.preventDefault();
 const produitObject = {
 id:id,
 
 nomcategorie: nomcategorie,
 imagecategorie: imagecategorie,
 
 v:v

 };
 Api.post('categories',produitObject)
 .then(res => console.log(res.data));
 Navigate('../categories/ListeCategories');

 };
 return (
      

 <div>
 <h2>Ajout d'une categorie </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="id"
 type="text"
 value={id}
 onChange={e => setId(e.target.value)}
 />
 </div>
 
 <div>
 <input
 placeholder="nomCategorie"
 name="nomcategorie"
 type="text"
 value={nomcategorie}
 onChange={e => setnomcategorie(e.target.value)}
 />
 </div>
 
 
 <div>
 <input
 placeholder="Image"
 type="file"
 value={inputFile}
 onChange={e => {  setInputFile(e.target.value);setimagecategorie('/images/'+e.target.files[0].name)}}
 />
 
 </div>
 <div>
 <button>Submit</button>
 </div>
 </form>

 </div>
 );
}