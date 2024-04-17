import "../App.css";
import React from "react";
import Button from "@mui/material/Button";

const TodoInfo = ({ todos, countCompleted, deleteComplete }) => {
  return (
    <div className="bottom-container">
      <p className="todos-length">
        {todos.length} {todos.length <= 1 ? "item" : "items"}
      </p>
      <p className="completed-items">
        {countCompleted()}{" "}
        {countCompleted() <= 1 ? "completed item" : "completed items"}
      </p>
      <div className="button-complete">
        <Button
          variant="text"
          size="small"
          sx={{ m: 1, color: "grey", fontWeight: "bold" }}
          onClick={() => deleteComplete()}
        >
          Clear Completed
        </Button>
      </div>
    </div>
  );
};

export default TodoInfo;
