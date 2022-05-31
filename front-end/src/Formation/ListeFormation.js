import { useState,useEffect } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Api from "../Axios/Api";
import { Button } from "@mui/material";
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
const ListeFormation=()=>{
    const[frmt,setfrmt]=useState([]);
    useEffect(() => {
        Api.get('/formations').then(res=>{
            setfrmt(res.data)
            console.log(frmt)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    const deleteformati=(_id)=>{
      Api.delete('/formations/'+_id)
      .then((res) => {
      console.log('successfully deleted!')
      }).catch((error) => {
      console.log(error)
      })
     } 
    

    return(
      <div>
       <button><Link exact to="../Formation/AjoutFormation">Ajout</Link></button> 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>nom du formations</StyledTableCell>
            <StyledTableCell>Prix</StyledTableCell>
            <StyledTableCell >date</StyledTableCell>

            <StyledTableCell >Forum correspondant</StyledTableCell>
            <StyledTableCell >Formateur </StyledTableCell> 
            <StyledTableCell >Participants</StyledTableCell>
            
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {frmt.map((c) => (
            <StyledTableRow key={c._id}>
              <StyledTableCell component="th" scope="row">
                {c.nom}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.prix}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.dt}
              </StyledTableCell>
              
              
              <StyledTableCell component="th" scope="row">
                {c.Forum?c.Forum.nom:null}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.Formateur?c.Formateur.nom:null}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.Participants?c.Participants.map((p) => <li>{p.nom}</li>):null}
              </StyledTableCell>
              
              <Button variant="contained" color="inherit">
              <Link exact to={`/Modifierformation/${c._id}`}>Modifier</Link></Button>
             
              <Button onClick={()=>{deleteformati(c._id)}}> Supprimer</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default ListeFormation ;