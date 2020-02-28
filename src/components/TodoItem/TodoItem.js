import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Label,
  List,
  Button,
  Icon,
  Grid,
  Input,
  GridColumn,
  Divider
} from "semantic-ui-react";
import { addTodo, deleteTodo } from "../../actions/todoActions";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleAdd = e => {
    this.props.addTodo({
      id: parseInt(this.props.count) + 1,
      title: this.state.inputValue
    });
    this.setState({
      inputValue: ""
    });
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos, addTodo } = this.props;
    const todosList =
      todos &&
      todos.map(todo => (
        <List.Item key={todo && todo.id}>
          <List.Content floated="right">
            <Icon
              name="remove circle"
              color="orange"
              onClick={() => this.handleDelete(todo && todo.id)}
            />
          </List.Content>
          <Label color="teal" horizontal>
            {todo.id}
          </Label>
          {todo.title}
        </List.Item>
      ));

    return (
      <>
        <List divided selection>
          {todosList}
        </List>
        <Input
          value={this.state.inputValue}
          placeholder="type here..."
          onChange={(e, { value }) => {
            console.log(value);
            this.setState({ inputValue: value });
          }}
        />
        <br />
        <Button color="yellow" size="mini" onClick={e => this.handleAdd(e)}>
          Add
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    count: state.todos && state.todos.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
