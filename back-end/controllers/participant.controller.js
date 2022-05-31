import mongoose from 'mongoose';
import Participant from '../models/Participant.model.js';
export const getParticipants = async (req, res) => {
try {
const cat = await Participant.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getParticipantByID = async (req, res) => {
try {
const cat = await Participant.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createParticipant = async (req, res) => {
const { nom , prenom, image} = req.body;
const newParticipant = new Participant({ nom:nom, prenom:prenom,
image:image })
try {
await newParticipant.save();
res.status(201).json(newParticipant );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateParticipant= async (req, res) => {
const { id } = req.params;
const { nom, prenom, image} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Participant avec un id: ${id}`);
const aut1 = { nom:nom, prenom:prenom, image:image, _id: id };
await Participant.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteParticipant = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Participant avec l'ID: ${id}`);
await Participant.findByIdAndDelete(id);
res.json({ message: "Participant supprimé avec succès." });
}