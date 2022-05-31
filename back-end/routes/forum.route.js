import express from 'express';
const router = express.Router();
import {auth} from "../middleware/auth.js";

import { getForums, getForumByID, createForum, updateForum, deleteForum }
from '../controllers/Forum.controller.js';
/**
* @route GET /api/Forums
* @desc Get All Forums
* @access Public
*/
router.get('/',auth, getForums);
/**
* @route POST /api/Forums
* @desc Ajouter un Forum
* @access Public
*/
router.post('/', createForum);
/**
* @route GET /api/Forums/:id
* @desc Renvoyer un Forum
* @access Public
*/
router.get('/:id', getForumByID);
/**
* @route PUT /api/Forums/:id
* @desc Modifier un Forum
* @access Public
*/
router.put('/:id', updateForum);
/**
* @route DELETE /api/Forums/:id
* @desc Supprimer un Forum
* @access Public
*/
router.delete('/:id', deleteForum);
export default router;