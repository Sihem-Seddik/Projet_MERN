import mongoose from "mongoose"
var participantSchema = mongoose.Schema({
nom: String,
prenom: String,
image: String
});
const Participant = mongoose.model('Participant', participantSchema);
export default Participant