require('dotenv').config();

const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI;

// connect to mongoDB
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(error);
    }
}

connect();

// define note schema
const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model('Note', noteSchema);

app.post("/addNote", async (req, res) => {
    await Note.insertMany([req.body]);
    res.json('Note added');
})

app.get("/notes", async (req, res) => {
    const allNotes = await Note.find({});
    res.json(allNotes);
})

app.delete("/deleteNote/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json('Note deleted');
});

app.listen(5000, () => {console.log("Server running on port 5000")})
