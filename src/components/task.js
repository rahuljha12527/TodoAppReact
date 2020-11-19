import React from "react";

function task(props) {
  const { task ,handleDelete,index,handleEdit} = props;
  return (
    <div>
      <p style={{ display: "inline-block" }}>{task}</p>
      <button style={{ display: "inline-block" }} onClick={()=>handleDelete(task,index)}>Delete</button>
      <button style={{ display: "inline-block" }} onClick={()=>handleEdit(task,index)}>Edit Task</button>
    </div>
  );
}

export default task;
