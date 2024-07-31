import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [noteList, setNoteList] = React.useState([
    {
      title: "Note title",
      content: "Note content",
    },
  ]);

  function addNote(note) {
    setNoteList((prevList) => [...prevList, note]);
  }

  function deleteNote(id) {
    setNoteList((prevList) => prevList.filter((_, i) => i !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => {
        const key = uuidv4();

        return (
          <Note
            key={key}
            id={index}
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
