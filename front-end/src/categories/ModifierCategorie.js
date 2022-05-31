import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Api from "../Axios/Api";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router";
export default function ModifierCategorie({match}){ 
   
    const [nomcategorie, setnomcategorie] = useState("");
    const [imagecategorie, setimagecategorie] = useState("");
    const[v,setV]=useState("");
    const [inputFile, setInputFile] = useState();
let Navigate = useNavigate();

const {id}=useParams();
useEffect(()=>{ Api.get('categories/'+id).then(res => { setnomcategorie(res.data.nomcategorie);
    setV(res.data.v); 
 

setimagecategorie(res.data.imagecategorie); }) },[]);
const handleSubmit = (event) => { event.preventDefault(); 
const produitObject = {
    id:id,
 
    nomcategorie: nomcategorie,
    imagecategorie: imagecategorie,
    
    v:v }; 
Api.put('categories/'+id,produitObject ) .then(res => console.log(res.data));
Navigate("../categories/ListeCategories");
 }
return ( <div>
<h2>Modification d'un produit </h2> 
<form onSubmit={handleSubmit}> 
<div>
<input placeholder="nomcategorie" type="text" value={nomcategorie} onChange={e => setnomcategorie(e.target.value)} /> 
 </div> 
<div>
<input placeholder="v" name="v" type="text" value={v} onChange={e => setV(e.target.value)} />
</div> 


<div>
<input placeholder="Image" type="file" value={inputFile} onChange={e => { setInputFile(e.target.value);setimagecategorie("/images/"+e.target.files[0].name)}} /> 
</div> 
<div> 
<button>Submit</button> 
</div> 
</form> 
</div> ); 
}