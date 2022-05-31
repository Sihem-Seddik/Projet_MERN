import { useState,useEffect } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Button } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Api from "../Axios/Api";
import ModifierParticipant from "./ModifierParticipant";
import {Link} from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const ListParticipant=()=>{
    const[parti,setparti]=useState([]);
    useEffect(() => {
        Api.get('/participants').then(res=>{
            setparti(res.data)
            console.log(parti)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    const deleteParti=(_id)=>{
      Api.delete('/participants/'+_id)
      .then((res) => {
      console.log('successfully deleted!')
      }).catch((error) => {
      console.log(error)
      })
     } 
    

    return(
      <div>
       <button><Link exact to="../Participant/AjoutParticipant">Ajout</Link></button> 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom participants</StyledTableCell>
            <StyledTableCell>Prenom</StyledTableCell>
           
            <StyledTableCell >Image</StyledTableCell>
            
            <StyledTableCell >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parti.map((c) => (
            <StyledTableRow key={c._id}>
              <StyledTableCell component="th" scope="row">
                {c.nom}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.prenom}
              </StyledTableCell>
              
              <StyledTableCell><img src ={"/images/Participant/"+c.image} alt="" width="200" height="100"/></StyledTableCell>

             
           
             
              
              <Button variant="contained" color="inherit">
              <Link  exact to={`/ModifierParticipant/${c._id}`}>Modifier</Link>
</Button>
<Button variant="outlined" color="error" onClick={()=>{deleteParti(c._id)}}>
Supprimer
</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default ListParticipant ;