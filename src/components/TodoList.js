import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  const [checked, setChecked] = useState([]);

  const handleChange = (event, id) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // Add the id to checked array
      setChecked([...checked, id]);
    } else {
      // Remove the id from checked array
      setChecked(checked.filter((itemId) => itemId !== id));
    }
    toggleComplete(id);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 600, marginLeft: 1, marginRight: 1 }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            className={`${todo.completed ? `completed` : ""}`}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTodo(todo.id)}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={(e) => handleChange(e, todo.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  onChange={(e) => handleChange(e, todo.id)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <div className={`${todo.completed ? `completed` : ""}`}>
                <ListItemText id={labelId} primary={todo.task} />
              </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;

// <div className="list-container">
//   <div className={`left-component ${todo.completed ? `completed` : ""}`}>
//     <Checkbox
//       checked={checked}
//       onChange={(e) => handleChange(e, todo.id)}
//       inputProps={{ "aria-label": "controlled" }}
//     />
//     <p>{todo.task}</p>
//   </div>
//   <div className="right-component">
//     <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
//       <DeleteOutlinedIcon />
//     </IconButton>
//   </div>
// </div>
