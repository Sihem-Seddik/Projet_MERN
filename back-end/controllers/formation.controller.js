import mongoose from 'mongoose';
import Formation from '../models/Formation.model.js';
export const getFormations = async (req, res) => {
 try {
 const cat = await Formation.find().populate('Forum')
 .populate('Formateur').populate('Participants');
;

 res.status(200).json(cat);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const getFormationByID = async (req, res) => {
 try {
 const form = await Formation.findById(req.params.id).populate('Forum')
 .populate('Formateur').populate('Participants')
 res.status(200).json(form);
 } catch (error) {
 res.status(404).json({ message: error.message });
 }
}
export const createFormation = async (req, res) => { 
 const {
    nom,dt,prix,Participants,Formateur,Forum} =
req.body;

 const newFormation = new Formation({
nom:nom,dt:dt,prix:prix,Participants:Participants,Formateur:Formateur,Forum:Forum })
 try {
 await newFormation.save();
 res.status(201).json(newFormation );
 } catch (error) {
 res.status(409).json({ message: error.message });
 }
}

export const updateFormation= async (req, res) => {
 const { id } = req.params;
 const {
    nom,dt,prix,Participants,Formateur,Forum } =
req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Formation avec un id: ${id}`);
 const form1 = {
    nom:nom,dt:dt,prix:prix,Participants:Participants,Formateur:Formateur,Forum:Forum, _id: id
};
 await Formation.findByIdAndUpdate(id, form1);
 res.json(form1);
}
export const deleteFormation = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
de Formation avec l'ID: ${id}`);
 await Formation.findByIdAndDelete(id);
 res.json({ message: "Formation supprimé avec succès." });
}