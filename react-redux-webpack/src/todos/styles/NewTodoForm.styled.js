import styled from "styled-components";

export const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

export const NewTodoInput = styled.input`
  font-size: 16px;
  height: 40px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  display: block;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.red};
  border: 1px solid ${(props) => props.theme.colors.red};
  width: 50%;
  margin: 0 auto;
  margin-top: 8px;
  padding: 3px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.lightRed};
`;
