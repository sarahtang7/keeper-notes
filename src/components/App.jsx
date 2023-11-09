import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [notesArr, setNotesArr] = useState(notes);

  function addNote(newNote) {
    setNotesArr((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(noteID) {
    setNotesArr((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index != noteID;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewNote onAdd={addNote} />
      {notesArr.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
