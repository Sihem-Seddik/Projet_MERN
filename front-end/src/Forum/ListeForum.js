import { useState,useEffect } from "react";
import * as React from 'react';
import { Button } from "@mui/material";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Api from "../Axios/Api";
import ModifierForum from "./ModifierForum";
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
const ListForum=()=>{
    const[form,setform]=useState([]);
    useEffect(() => {
        Api.get('/forums').then(res=>{
            setform(res.data)
            console.log(form)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    const dleteForu=(_id)=>{
      Api.delete('/forums/'+_id)
      .then((res) => {
      console.log('successfully deleted!')
      }).catch((error) => {
      console.log(error)
      })
     } 
    

    return(
      <div>
       <button><Link exact to="../Forum/AjoutForum">Ajout</Link></button> 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom du forum</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
           
            <StyledTableCell >Numtel</StyledTableCell>
            
            <StyledTableCell >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {form.map((c) => (
            <StyledTableRow key={c._id}>
              <StyledTableCell component="th" scope="row">
                {c.nom}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {c.email}
              </StyledTableCell>
              
              <StyledTableCell component="th" scope="row">
               {c.numtel}
              </StyledTableCell>
             
              <Button variant="contained" color="inherit">
              <Link exact to={`/ModifierForum/${c._id}`}>Modifier</Link></Button>
            
              <Button variant="outlined" color="error"  onClick={()=>{dleteForu(c._id)}}> Supprimer</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default ListForum ;