import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleOnChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAddNote() {
    const updatedNote = {
      title: note.title || "Title",
      content: note.content || "Note content",
    };
    props.addNote(updatedNote);
    setNote({ title: "", content: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddNote();
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleOnChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleOnChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
