import React, { Component } from "react";
import task from "./components/task";
import Task from "./components/task";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      task: [e.target.value],
    });
  };

  handleDelete = (task,index) => {
    //use filter
    const { tasks } = this.state;
    console.log("items Delete",task[0]);
    // const items=tasks.filter((item)=>item!==task);
    const items = tasks.filter((item,ind) => ind !== index);
    console.log("filter Items",items);
    
    this.setState({
      tasks: items,
    });
  };

  handleClick = () => {
    const { task, tasks } = this.state;

    //check if task is empty
    if (task === "") {
      alert("task is empty");
    } else {
      tasks.push(task);

      //if not add this task in tasks array
      this.setState({
        tasks: tasks,
      });
    }
  };

  handleEdit=()=>{
    
  }

  render() {
    const { task, tasks } = this.state;
    console.log("task", task);
    console.log("tasksssss", tasks);
    return (
      <div>
        <input style={{ margin: "10%" }} onChange={this.handleOnChange} />
        <button onClick={this.handleClick}>Add Task</button>

        {tasks.map((task,index) => (
          <Task task={task} index={index} handleDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default App;
