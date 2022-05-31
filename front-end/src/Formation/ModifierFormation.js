import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../Axios/Api";
export default function ModifierFormation({match}){
    const [nom, setnom] = useState("");
    const [dt, setdt] = useState();
    const [prix, setprix] = useState("");
    const [Participants, setParticipants] = useState([]);

    const [Forum, setForum] = useState("");
    const [Formateur, setFormateur] = useState("");
    const [listForum,setListForum]=useState([]);
 const [listFormateur,setFormat] =useState([]);
 const [ListParticipant,setParticip] =useState([]);
 let Navigate = useNavigate();
 useEffect(()=>{Api.get('/forums/').then((res)=>{setListForum(res.data)}).catch((err)=>{console.log(err.message)});
  Api.get('/participants/').then((res)=>{setParticip(res.data)}).catch((err)=>{console.log(err.message)});
  Api.get('/formateurs').then((res)=>{setFormat(res.data)}).catch((err)=>{console.log(err.message)})},[]);
 const {id} = useParams();
 function App(event) {
   if (Participants.indexOf(event.target.value)==-1){
 Participants.push(event.target.value);
}
 }
 useEffect(()=>{
Api.get('/formations/'+id).then(res => {
 setnom(res.data.nom);
 setdt(res.data.dt);
 setprix(res.data.prix);
 setForum(res.data.Forum.nomForum);
 setFormateur(res.data.Formateur.nomFormateur);
 setParticipants(res.data.Participants)
 })
 },[id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const parf = {
 id:id ,
nom: nom,
dt:dt,
prix:prix,
 Forum:Forum ,
 Formateur :Formateur,
 Participants:Participants
 };
Api.put('/formations/'+id,parf ) 
 .then(res => console.log(res.data));
 Navigate("../Formation/ListeFormation");
 
 }
 return (
 <div>
 <h2>Modification d'une formations </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom formation"
 type="text"
 value={nom}
 onChange={e => setnom(e.target.value)}
 />
 </div>
 <div>
 <input
 
 type="date"
 value={dt}
 onChange={e => setdt(e.target.value)}/>
 </div>
 <div>
 <input
 placeholder="prix  "
 type="text"
 value={prix}
 onChange={e => setprix(e.target.value)}
 />
 </div>
 
 <div>
 <select
 placeholder="nom Forum"
 type="text"
 value={Forum}
 onChange={e => setForum(e.target.value)}>
 {listForum.map(((l)=>(<option value={l._id}>{l.nom}</option>)))}
 </select>
 </div>
 <div>
 <strong>Formateur : </strong><br/>
 <select
 placeholder="Formateur"
 type="text"
 value={Formateur}
 onChange={e => setFormateur(e.target.value)}>
    
    {listFormateur.map(((lc)=>(<option value={lc._id}>{lc.nom}</option>)))}
 </select>
 </div>
 <div><strong> Les participants</strong><br/>
 <select multiple
 placeholder="Participant"
 type="text"
 value={Participants}
 
 onChange={e =>App(e)}>
    
    {ListParticipant.map(((lc)=>(<option value={lc._id}>{lc.nom}</option>)))}
 </select></div>
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}