import mongoose from "mongoose"

var formationSchema = mongoose.Schema({
nom: String,
dt: Date,
prix: Number,
Forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum'
    },
Formateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formateur'
    } ,
Participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Participant'
    }] 
})
const Formation = mongoose.model('Formation', formationSchema);
export default Formation