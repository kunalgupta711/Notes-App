import React from 'react';

const Note = (props) => {
  const handleBack = () => {
    props.setFlag('display');

    props.setSelected({});
    // console.log(props.selected);
  };

  const handleEdit = () => {
    props.setFlag('edit');

    // console.log(props.selected);
  };
  return (
    <>
      {props.selected.description}
      <p onClick={handleBack}>Back</p>
      <p onClick={handleEdit}>Edit</p>
    </>
  );
};
export default Note;
