import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";

import { devices } from '~/constants/media';

const border = "5px";
const width = percent => `
  max-width: ${percent}%;
  min-width: ${percent}%;
  width: ${percent}%;
`;

const Wrapper = styled.div`
  border: ${border} solid transparent;
  border-radius: 15px;
  box-sizing: border-box;
  display: inline-block;
  transition: transform 0.3s linear, border 0.3s linear;

  &:hover {
    border: ${border} solid ${props => props.theme.primary};
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
  color: #333;
  font-size: 1.5em;
  text-align: center;
`;

class Person extends PureComponent {
  static get propTypes() {
    return {
      name: PropTypes.string.isRequired,
    };
  }
  static get defaultProps() {
    return {
      name: "",
    };
  }
  render() {
    return (
      <Wrapper>
        <Item>
          <Value>{this.props.name}</Value>
        </Item>
      </Wrapper>
    );
  }
}

export default Person;
