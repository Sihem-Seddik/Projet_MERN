import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import forumRouter from "./routes/forum.route.js"
import formateurRouter from "./routes/formateur.route.js"
import participantRouter from "./routes/participant.route.js"; 
import formationRouter from "./routes/formation.route.js";
import userRouter from "./routes/user.route.js";


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/forums', forumRouter);
app.use('/api/formateurs', formateurRouter);
app.use('/api/participants', participantRouter); 
app.use('/api/formations', formationRouter); 
app.use('/api/users', userRouter);
app.get("/",(req,res)=>{
res.send("gestforom");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });