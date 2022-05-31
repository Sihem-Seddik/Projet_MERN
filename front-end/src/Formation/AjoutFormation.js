import React, { useState } from "react";
import Api from "../Axios/Api";
import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function AjoutFormation() {
   const [_id, setid] = useState("");
 const [nom, setnom] = useState("");
 const [prix, setprix] = useState();
 const [dt, setdt] = useState();
 const [Participants, setParticipants] = useState([]);

 const [Forum, setForum] = useState();
 const [Formateur, setFormateur] = useState();
 const [listForum,setListForum]=useState([]);
 const [listFormateur,setFormat] =useState([]);
 const [ListParticipant,setParticip] =useState([]);

  let Navigate= useNavigate();
  useEffect(()=>{Api.get('/forums/').then((res)=>{setListForum(res.data)}).catch((err)=>{console.log(err.message)});
  Api.get('/participants/').then((res)=>{setParticip(res.data)}).catch((err)=>{console.log(err.message)});
  Api.get('/formateurs').then((res)=>{setFormat(res.data)}).catch((err)=>{console.log(err.message)})},[]);
 const handleSubmit = (event) => {
 event.preventDefault();

 const parf = {
    id:_id,
 nom: nom,
 prix:prix,
 dt:dt,
 
 Forum:Forum,
 Formateur:Formateur,
 Participants:Participants
 };
 console.log(parf);
 Api.post('/formations',parf ) 
 .then(res => console.log(res.data));
Navigate("../Formation/ListeFormation")

 }
 return (
 <div>
 <h2>Ajout d'une formation </h2>
 <form onSubmit={handleSubmit}>

 
 

 <div>
 
 <input
 placeholder="nom formation"
 type="text"
 value={nom}
 onChange={e => setnom(e.target.value)}
 /><br/>
 </div><br/>
 <div>
 <input
 
 type="date"
 value={dt}
 onChange={e => setdt(e.target.value)}
 />
 
 </div><br/><div>
 <input
 placeholder="Prix"
 type="text"
 value={prix}
 onChange={e => setprix(e.target.value)}
 />
 </div><br/>
 <div>
 <strong>Forum correspondant</strong><br/>
 <select
 placeholder="nom Forum"
 type="text"
 value={Forum}
 onChange={e => setForum(e.target.value)}>
 {listForum.map(((l)=>(<option value={l._id}>{l.nom}</option>)))}
 </select>
 </div><br/>
 <div>
 <strong>Formateur : </strong><br/>
 <select
 placeholder="Formateur"
 type="text"
 value={Formateur}
 onChange={e => setFormateur(e.target.value)}>
    
    {listFormateur.map(((lc)=>(<option value={lc._id}>{lc.nom}</option>)))}
 </select><br/>
 </div>
 <div>
 <strong> Les participants</strong><br/>
 <select multiple
 placeholder="Participant"
 type="text"
 value={Participants}
 onChange={e =>Participants.push(e.target.value)}>
    
    {ListParticipant.map(((lc)=>(<option value={lc._id}>{lc.nom}</option>)))}
 </select>
 </div>
 
 <div><br/>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}
