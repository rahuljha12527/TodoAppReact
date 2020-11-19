import React from "react";

function task(props) {
  const { task ,handleDelete} = props;
  return (
    <div>
      <p style={{ display: "inline-block" }}>{task}</p>{" "}
      <button style={{ display: "inline-block" }} onClick={()=>handleDelete(task)}>Delete</button>
    </div>
  );
}

export default task;
