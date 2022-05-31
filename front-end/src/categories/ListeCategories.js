import { useState,useEffect } from "react";
import axios from "axios";
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
      border: 0
    },
  }));
const ListCategorie=()=>{
    const[cat,setCat]=useState([]);
    useEffect(() => {
        Api.get('/categories/').then(res=>{
            setCat(res.data)
            console.log(cat)
        })
        .catch(function(error){
            console.log(error)
        })
        
       
    })
    const deleteProd=(id)=>{ Api.delete('categories/'+id) .then((res) => { console.log('successfully deleted!') }).catch((error) => { console.log(error) }) }

    return(
        //<div>composant liste de Categorie</div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
       <button> <Link exact to="../categories/AjoutCategorie.js">Ajouter categorie</Link></button>
          <TableRow>
            <StyledTableCell>nom categories</StyledTableCell>
          
            <StyledTableCell align="right">images</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cat.map((c) => (
            <StyledTableRow key={c.id}>
              <StyledTableCell component="th" scope="row">
                {c.nomcategorie}
              </StyledTableCell>
              <StyledTableCell align="right"><img src ={c.imagecategorie} width="600" height="100"/></StyledTableCell>
              <StyledTableCell><button><Link exact to={`../categories/ModifierCategorie.js/${c.id}`}> Modifier</Link> </button><button onClick={()=>{deleteProd(c.id)}}>Supprimer</button> </StyledTableCell>
              </StyledTableRow>
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
    )
}
export default ListCategorie;