import PropTypes from "prop-types";
import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animated } from "react-spring";

import { devices } from "~/constants/media";

const border = "5px";
const width = percent => `
  max-width: ${percent}%;
  min-width: ${percent}%;
  width: ${percent}%;
`;

const Wrapper = styled(animated.div)`
  border: ${border} solid transparent;
  border-radius: 15px;
  box-sizing: border-box;
  display: inline-block;
  transition: transform 0.3s linear, border 0.3s linear;

  a {
    text-decoration: none;
  }

  &:hover {
    border: ${border} solid ${props => props.theme.secondary};
  }

  ${devices.mobile} {
    ${width(50)}
  }

  ${devices.tablet} {
    ${width(33.333)}
  }

  ${devices.laptop} {
    ${width(25)}
  }

  ${devices.desktop} {
    ${width(20)}
  }
`;

const Item = styled.div`
  margin: 1em;

  & + & {
    margin-top: 20px;
  }
`;

const Value = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 1.5em;
  text-align: center;
`;

const Person = memo(({ name, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Link to={`/person/${name}`}>
        <Item>
          <Value>{name}</Value>
        </Item>
      </Link>
    </Wrapper>
  );
});

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

Person.defaultProps = {
  name: "",
};

export default Person;
