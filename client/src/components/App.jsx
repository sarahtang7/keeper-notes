import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Note from "./Note";

function App() {
  const [notesArr, setNotesArr] = useState([])

  useEffect(() => {
    getNotes();
  }, [])

  function getNotes() {
    fetch("/notes").then(
      response => response.json()
    ).then(
      data => {
        setNotesArr(data)
      }
    )
  }

  function addNote(newNote) {
    console.log(newNote)
    fetch("/addNote", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    }).then(
      response => response.json()
    ).then (
      data => {
        console.log(data);
        getNotes();
      }
    )
  }

  function deleteNote(noteID) {
    fetch(`/deleteNote/${noteID}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      getNotes();
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <Header />
      <NewNote onAdd={addNote} />
      {notesArr.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
