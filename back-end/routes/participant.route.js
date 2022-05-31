import express from 'express';
const router = express.Router();
import {auth} from "../middleware/auth.js";

import { getParticipants, getParticipantByID, createParticipant, updateParticipant, deleteParticipant } from
'../controllers/Participant.controller.js';
/**
 * @route GET /api/Participants
 * @desc Get All Participants
 * @access Public
 */
router.get('/',auth, getParticipants);
/**
 * @route POST /api/Participants
 * @desc Ajouter un Participant
 * @access Public
 */
router.post('/', createParticipant);
/**
 * @route GET /api/Participants/:id
 * @desc Renvoyer un Participant
 * @access Public
 */
router.get('/:id', getParticipantByID);
/**
 * @route PUT /api/Participants/:id
 * @desc Modifier un Participant
 * @access Public
 */
router.put('/:id', updateParticipant);
/**
 * @route DELETE /api/Participants/:id
 * @desc Supprimer un Participant
 * @access Public
 */
router.delete('/:id', deleteParticipant);
export default router; 