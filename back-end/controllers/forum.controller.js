import mongoose from 'mongoose';
import Forum from '../models/Forum.model.js';
export const getForums = async (req, res) => {
try {
const cat = await Forum.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getForumByID = async (req, res) => {
try {
const cat = await Forum.findById(req.params.id);
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createForum = async (req, res) => {
const { nom , email, numtel} = req.body;
const newForum = new Forum({ nom:nom, email:email,
numtel:numtel })
try {
await newForum.save();
res.status(201).json(newForum );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateForum= async (req, res) => {
const { id } = req.params;
const { nom, email, numtel} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Forum avec un id: ${id}`);
const aut1 = { nom:nom, email:email, numtel:numtel, _id: id };
await Forum.findByIdAndUpdate(id, aut1);
res.json(aut1);
}
export const deleteForum = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Forum avec l'ID: ${id}`);
await Forum.findByIdAndDelete(id);
res.json({ message: "Forum supprimé avec succès." });
}