import React from "react";
import TodoList from "./todos/TodoList";
import GlobalStyle from "./GlobalStyle";
import AppContainer from "./App.styled";
import { hot } from "react-hot-loader/root";

const App = () => (
  <AppContainer>
    <GlobalStyle />
    <TodoList />
  </AppContainer>
);

export default hot(App);
