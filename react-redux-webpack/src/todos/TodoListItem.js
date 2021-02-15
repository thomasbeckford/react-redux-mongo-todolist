import React from "react";
import {
  TodoItemContainer,
  ButtonsContainer,
  CompletedButton,
  RemoveButton,
  TodoItemContainerWithWarning,
} from "./TodoListItem.styled";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at: &nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => onCompletedPressed(todo._id)}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo._id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoListItem;
