import React from "react";
import { hot } from "react-hot-loader/root";
import TodoList from "./todos/TodoList";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  background: #fafafa;
`;

document.body.style.backgroundColor = "#FAFAFA";

const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

export default hot(App);
