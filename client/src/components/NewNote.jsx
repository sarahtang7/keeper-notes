import React, { useState } from "react";

function NoteArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    event.preventDefault();
    const inputType = event.target.name;
    const inputValue = event.target.value;

    setNote((prevValue) => {
      if (inputType === "title") {
        return {
          title: inputValue,
          content: prevValue.content
        };
      } else if (inputType === "content") {
        return {
          title: prevValue.title,
          content: inputValue
        };
      }
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
          required
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NoteArea;
