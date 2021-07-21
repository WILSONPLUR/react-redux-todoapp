import {useDispatch, useSelector} from "react-redux";
import Input from "./components/Input";
import {Container, Card, Button} from "@material-ui/core";
import {deleteTodo} from "./actions/deleteTodo";

export default () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const removeTodo = () => {
        dispatch(deleteTodo(todos.map(i => console.log(i))));
    }
  return (
      <Container maxWidth="lg">
          <div className="app-container">
              <h1>Todolist</h1>
              <br/>
              <br/>
              <Input/>
              <br/>
              {todos.map((item) => {
                  return (
                              <Card className="card" key={item.id}>
                                  <h1>Name: {item.name}</h1>
                                  <h2>Description: {item.desc}</h2>
                                  <h3>Id: {item.id}</h3>
                                  {/*<Button onClick={removeTodo} variant="contained" color="danger">Delete</Button>*/}
                              </Card>

                  )
              })}
          </div>
      </Container>

  )
}
