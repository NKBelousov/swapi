import styled from "styled-components";

const Search = styled.input`
  background: transparent;
  border: 1px solid ${props => props.theme.secondary};
  box-sizing: border-box;
  color: ${props => props.theme.secondary};
  display: block;
  margin: 0.5em;
  padding: 0.5em;
  width: calc(100% - 1em);

  &:focus {
    outline: 1px solid ${props => props.theme.secondary};
  }
`;

export default Search;
