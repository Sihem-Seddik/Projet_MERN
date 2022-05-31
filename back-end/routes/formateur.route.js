import express from 'express';
const router = express.Router();
import {auth} from "../middleware/auth.js";

import { getFormateurs, getFormateurByID, createFormateur, updateFormateur, deleteFormateur }
from '../controllers/Formateur.controller.js';
/**
* @route GET /api/Formateurs
* @desc Get All Formateurs
* @access Public
*/
router.get('/',auth, getFormateurs);
/**
* @route POST /api/Formateurs
* @desc Ajouter un Formateur
* @access Public
*/
router.post('/', createFormateur);
/**
* @route GET /api/Formateurs/:id
* @desc Renvoyer un Formateur
* @access Public
*/
router.get('/:id', getFormateurByID);
/**
* @route PUT /api/Formateurs/:id
* @desc Modifier un Formateur
* @access Public
*/
router.put('/:id', updateFormateur);
/**
* @route DELETE /api/Formateurs/:id
* @desc Supprimer un Formateur
* @access Public
*/
router.delete('/:id', deleteFormateur);
export default router;