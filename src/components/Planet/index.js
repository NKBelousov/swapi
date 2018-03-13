import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { PRIMARY } from "~/constants/theme";

const border = "5px";
const width = "33.3%";
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
    border: ${border} solid ${PRIMARY};
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

class Planet extends Component {
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

export default Planet;
