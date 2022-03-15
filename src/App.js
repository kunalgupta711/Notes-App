import React, { useState } from 'react';
import './style.css';
import NotesList from './Components/NotesList';
import Note from './Components/Note';
import EditNote from './Components/EditNote';
const App = () => {
  const [notes, setNotes] = useState([
    { title: 'Demo1', description: 'detailed explanation 1' },
    { title: 'Demo2', description: 'detailed explanation 2' },
  ]);
  const [flag, setFlag] = useState('display');
  const [selected, setSelected] = useState();
  // console.log('Parent');
  // console.log(notes[0]);
  // console.log(notes[0]);
  var component;
  if (flag == 'display') {
    component = (
      <NotesList
        notes={notes}
        setNotes={setNotes}
        flag={flag}
        selected={selected}
        setFlag={setFlag}
        setSelected={setSelected}
      />
    );
  } else if (flag == 'select') {
    component = (
      <Note
        notes={notes}
        setNotes={setNotes}
        flag={flag}
        selected={selected}
        setFlag={setFlag}
        setSelected={setSelected}
      />
    );
  } else if (flag == 'edit') {
    component = (
      <EditNote
        notes={notes}
        setNotes={setNotes}
        flag={flag}
        selected={selected}
        setFlag={setFlag}
        setSelected={setSelected}
      />
    );
  }
  return <div>{component}</div>;
};
export default App;
