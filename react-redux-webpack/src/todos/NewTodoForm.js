import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodoRequest } from "./thunks";
import {
  FormContainer,
  NewTodoInput,
  NewTodoButton,
  ErrorMessage,
} from "./styles/NewTodoForm.styled";

const initialState = { duplicated: false, emptyValue: false };

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState(initialState);

  const validateTodoText = (todoText) => {
    let text = todos.find((todo) => todo.text === todoText);
    if (text) setErrors({ duplicated: true });
    else setErrors({ duplicated: false });
  };

  const handleClick = () => {
    let isDuplicateText = todos.some((todo) => todo.text === inputValue);
    if (isDuplicateText) setErrors({ duplicated: true });
    if (!inputValue) setErrors({ emptyValue: true });
    if (!isDuplicateText && !!inputValue) {
      onCreatePressed(inputValue);
      setInputValue("");
      setErrors(initialState);
    }
  };

  useEffect(() => {
    validateTodoText(inputValue);
  }, [todos]);

  return (
    <FormContainer>
      <NewTodoInput
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => {
          setErrors(initialState);
          validateTodoText(e.target.value);
          setInputValue(e.target.value);
        }}
      />
      <NewTodoButton
        disabled={errors.duplicated && errors.emptyValue}
        onClick={() => handleClick()}
      >
        Create Todo
      </NewTodoButton>
      {errors.duplicated ? (
        <ErrorMessage>This Todo text is already taken.</ErrorMessage>
      ) : null}
      {errors.emptyValue ? (
        <ErrorMessage>Please type a Todo text.</ErrorMessage>
      ) : null}
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
