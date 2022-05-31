import mongoose from "mongoose"
var formateurSchema = mongoose.Schema({
nom: String,
prenom: String,
image: String
});
const Formateur = mongoose.model('Formateur',formateurSchema);
export default Formateur