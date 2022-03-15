import React from 'react';

const NotesList = (props) => {
  const handleSelect = (event) => {
    props.setSelected(event.target.innerHTML);
    var selected = props.notes.filter((data) => {
      // console.log(data.title);
      // console.log(event.target.innerHTML);
      return data.title == event.target.innerHTML;
    })[0]; //figured out while doing console.log for "selected"
    //console.log(props.selected);
    // console.log(selected.description);
    // console.log('djd');
    props.setSelected(selected); //updating selected with only filteredNote
    props.setFlag('select'); // setting flag to display description
  };

  return (
    <div>
      <b>Choose Note: </b>
      {props.notes.map((data) => (
        <>
          <ul>
            <li value={data.title} onClick={handleSelect}>
              {data.title}
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default NotesList;
