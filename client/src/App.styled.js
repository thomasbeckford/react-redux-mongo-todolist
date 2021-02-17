import styled from "styled-components";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  background: ${(props) => props.theme.colors.veryLightGrey};
`;

export default AppContainer;
