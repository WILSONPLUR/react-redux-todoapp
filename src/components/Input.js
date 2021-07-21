import {useState} from "react";
import {useDispatch, useStore, useSelector} from "react-redux";
import {addTodo} from "../actions/addTodo.js";
import {Input, Button} from "@material-ui/core";

export default () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const todoList = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const addingTodo = () => {
        if(name === "" || desc === "") {
            alert("Name and description mustn't be null")
        }
        else {
            const todoId = todoList.length + 1;
            dispatch(addTodo({
                name: name,
                desc: desc,
                done: false,
                id: todoId
            }))
        }
    }
    return (
        <div>
            <Input placeholder="Name of your task: " type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <br/>
            <Input placeholder="Description of your task" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={addingTodo}>Add</Button>
        </div>
    )
}
