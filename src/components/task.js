import React from "react";

function task(props) {
  const { task ,handleDelete,index} = props;
  return (
    <div>
      <p style={{ display: "inline-block" }}>{task}</p>
      <button style={{ display: "inline-block" }} onClick={()=>handleDelete(task,index)}>Delete</button>
    </div>
  );
}

export default task;
