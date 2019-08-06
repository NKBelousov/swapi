import PropTypes from "prop-types";
import React, { memo } from "react";
import styled from "styled-components";

const border = "5px";
const width = "50%";
const Wrapper = styled.div`
  border: ${border} solid transparent;
  border-radius: 15px;
  box-sizing: border-box;
  display: inline-block;
  max-width: ${width};
  min-width: ${width};
  transition: transform 0.3s linear, border 0.3s linear;
  width: ${width};

  &:hover {
    border: ${border} solid ${props => props.theme.primary};
  }
`;

const Item = styled.div`
  margin: 1em;

  & + & {
    margin-top: 20px;
  }
`;

const Value = styled.div`
  color: #333;
  font-size: 1.5em;
  text-align: center;
`;

const Starship = memo(({ name }) => (
  <Wrapper>
    <Item>
      <Value>{name}</Value>
    </Item>
  </Wrapper>
))

Starship.propTypes = {
  name: PropTypes.string,
};

Starship.defaultProps = {
  name: ''
};

Starship.displayName = 'Starship';

export default Starship;
