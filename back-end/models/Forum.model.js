import mongoose from "mongoose"
var forumSchema = mongoose.Schema({
nom: String,
email: String,
numtel: String
});
const Forum = mongoose.model('Forum', forumSchema);
export default Forum