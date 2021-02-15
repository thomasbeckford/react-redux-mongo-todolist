import styled from "styled-components";

export const TodoItemContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000 * 5)
    ? "none"
    : "2px solid red";

export const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

export const CompletedButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.green};
  color: white;
`;

export const RemoveButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.red};
  margin-left: 8px;
  color: white;
`;
