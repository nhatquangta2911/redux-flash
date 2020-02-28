import React from "react";
import { connect } from "react-redux";
import { Menu, Divider } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import "semantic-ui-css/semantic.min.css";

function App(props) {
  return (
    <div className="App">
      <Menu pointing secondary>
        <Menu.Item name="todos" active />
        <Menu.Item name="profile" />
        <Menu.Menu position="right">
          <Menu.Item
            name={`${props.count} item${props.count > 1 ? "s" : ""}`}
          />
        </Menu.Menu>
      </Menu>
      <TodoItem />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.todos && state.todos.length
  };
};

export default connect(mapStateToProps)(App);
