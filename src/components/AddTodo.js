import "../App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="add-todo-container">
      <div className="input-form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "50ch", marginRight: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="What is the task today?"
            variant="outlined"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
