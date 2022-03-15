import React from 'react';

const EditNote = (props) => {
  var editedNote = { ...props.selected };
  const handleEdit = (event) => {
    event.preventDefault();
    // console.log(editedNote);
    // props.setNotes
    let notes = [...props.notes];
    // """""let notes = [...props.notes];""""" or """""let notes = props.notes.slice();""""" will work same
    // console.log(notes);
    let index = notes.findIndex((obj) => obj.title == props.selected.title);
    // console.log(props.selected);
    // console.log(editedNote);
    // console.log(index);
    // console.log(notes[index]);
    // let note = notes[1];
    notes[index] = { ...editedNote };
    // console.log(...notes);
    // console.log(props.notes);
    props.setNotes([...notes]);
    // console.log(note);
    // console.log(props.notes);
    // console.log(props.notes[0]);
  };

  const handleChange = (event) => {
    if (event.target.name == 'title') {
      editedNote = { ...editedNote, title: event.target.value };
    } else {
      editedNote = { ...editedNote, description: event.target.value };
    }
    //console.log(editedNote);
    // console.log(event.target.value);
  };

  const handleBack = () => {
    props.setFlag('display');

    props.setSelected({});
    // console.log(props.selected);
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <label>
          <input
            type="text"
            name="title"
            placeholder={props.selected.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="textArea"
            name="description"
            placeholder={props.selected.description}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      <p onClick={handleBack}>Back </p>
    </>
  );
};
export default EditNote;
