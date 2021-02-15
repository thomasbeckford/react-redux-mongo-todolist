import React, { useEffect } from "react";
import { connect } from "react-redux";

import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "./thunks";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
  completedTodos,
  incompleteTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incompleted:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
