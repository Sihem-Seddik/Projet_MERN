import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../Axios/Api";
export default function ModifierParticipant({match}){
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [image, setImage] = useState("");
    const [inputFile, setInputFile] = useState("");

 let Navigate = useNavigate();
 const {id} = useParams();
 console.log(id)
 useEffect(()=>{
Api.get('/participants/'+id).then(res => {
 setNom(res.data.nom);
 setPrenom(res.data.prenom);
 setImage(res.data.image);
 
 })
 },[id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const parf = {
 id:id ,
nom: nom,
prenom:prenom,
image:image
 };
Api.put('/participants/'+id,parf ) 
 .then(res => console.log(res.data));
 Navigate("../Participant/ListeParticipant");
 
 }
 return (
 <div>
 <h2>Modification d'un Participant </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom "
 type="text"
 value={nom}
 onChange={e => setNom(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="prenom"
 type="text"
 value={prenom}
 onChange={e => setPrenom(e.target.value)}
 />
 </div>
 
 <div>
 <input
 placeholder="Image"
 type="file"
 value={inputFile}
 onChange={e => { setInputFile(e.target.value);setImage(e.target.files[0].name)}}
 />
 </div>
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}