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
    setNotesArr((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== noteID;
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
