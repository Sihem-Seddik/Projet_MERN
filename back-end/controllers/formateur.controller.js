import mongoose from 'mongoose';
import Formateur from '../models/Formateur.model.js';
export const getFormateurs = async (req, res) => {
try {
const cat = await Formateur.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getFormateurByID = async (req, res) => {
try {
const cat = await Formateur.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createFormateur = async (req, res) => {
const { nom , prenom, image} = req.body;
const newFormateur = new Formateur({ nom:nom, prenom:prenom,
image:image })
try {
await newFormateur.save();
res.status(201).json(newFormateur );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateFormateur= async (req, res) => {
const { id } = req.params;
const { nom, prenom, image} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Formateur avec un id: ${id}`);
const aut1 = { nom:nom, prenom:prenom, image:image, _id: id };
await Formateur.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteFormateur = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Formateur avec l'ID: ${id}`);
await Formateur.findByIdAndDelete(id);
res.json({ message: "Formateur supprimé avec succès." });
}