import styled from "styled-components";

const Content = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px ${props => props.theme.primary};
  margin: 1rem;
  padding: 1rem;
`;

export default Content;
