import { useState } from "react";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from "@mui/icons-material/Circle";
import { ListItemIcon } from "@mui/material";
export default function Body() {
  const [todos, setTodos] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const [task, setTask] = useState("");
  const onSearch = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    // e.preventDefault()
    if (task.length == 0) {
      return;
    }
    setTodos((t) => [...t, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    // setDoneTask((t)=>[...t,done])
    const doneItem = [...todos];
    const hey = doneItem.splice(index, 1);
    setDoneTask((t) => [...t, hey]);
    setTodos([...doneItem]);
  };

  return (
    <>
      <div className="body">
        <div className="heading">
          <Typography

            className="Title"
            variant="h4"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              fontSize: "2.0rem",
              backgroundColor:"white",
            }}
          >
            TO<span style={{ color: "rgb(80, 200, 120 )" }}>DONE</span>
          </Typography>
        </div>
        <div><Typography
              className="Title"
              variant="h4"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: "bold",
                fontSize: "2.0rem",
              }}
            >
              DO
            </Typography>
          <List className="tasks">
            
            {todos.map((todo, index) => (
              <ListItem
                className="task"
                sx={{ fontSize: "1.5rem", height: "56px", }}
                key={index}
              >
                <IconButton
sx={{marginRight:'15px'}}
                  onClick={() => deleteTask(index)}
                  edge="start"
                >
                  <CheckCircleIcon sx={{ color: "transparent", fontSize: 35,border:'2px solid black',borderRadius:'50%' }} />
                </IconButton>
                {todo}
              </ListItem>
            ))}
          </List>
        </div>
        <List>
          <Typography
            className="Title"
            variant="h4"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              fontSize: "2.0rem",
            }}
          >
            DO<span style={{ color: "rgb(80, 200, 120 )" }}>NE</span>
          </Typography>
          {doneTask.map((done, index) => (
            <ListItem
              sx={{ height: "56px", fontSize: "1.5rem" }}
              className="done_task"
              key={index}
            >
              <ListItemIcon
                
              >
                <CheckCircleIcon sx={{ color: "black", fontSize: 35,border:'2px solid black',borderRadius:'50%',opacity:'50%' }} />
              </ListItemIcon>
              <div style={{opacity:'50%'}} >
              {done}
              </div>
            </ListItem>
          ))}
        </List>
        <div className="search">
          <TextField
          sx={{width:'320px',alignContent:'center'}}
            onChange={onSearch}
            value={task}
            label="Add Task"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => addTask(task)}>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        
      </div>
    </>
  );
}
