import express from 'express';
const router = express.Router();
import {auth} from "../middleware/auth.js";

import { getFormations, getFormationByID, createFormation, updateFormation, deleteFormation } from '../controllers/formation.controller.js';
/**
 * @route GET /api/Formations
 * @desc Get All Formations
 * @access Public
 */
router.get('/',auth, getFormations);
/**
 * @route POST /api/Formations
 * @desc Ajouter un Formation
 * @access Public
 */
router.post('/', createFormation);
/**
 * @route GET /api/Formations/:id
 * @desc Renvoyer un Formation
 * @access Public
 */
router.get('/:id', getFormationByID);
/**
 * @route PUT /api/Formations/:id
 * @desc Modifier un Formation
 * @access Public
 */
router.put('/:id', updateFormation);
/**
 * @route DELETE /api/Formations/:id
 * @desc Supprimer un Formation
 * @access Public
 */
router.delete('/:id', deleteFormation);
export default router; 