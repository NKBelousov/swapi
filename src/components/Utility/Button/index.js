import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { PRIMARY, SECONDARY } from "~/constants/theme";

const Block = styled.div`
  background: ${PRIMARY};
  border: 1px solid ${PRIMARY};
  color: ${SECONDARY};
  cursor: pointer;
  display: block;
  margin: 0 auto;
  text-align: center;

  &:hover {
    background: ${SECONDARY};
    color: ${PRIMARY};
  }

  &:active {
    box-shadow: 0 0 15px #000 inset;
  }
`;

const Text = styled.span`
  font-size: 2rem;
  padding: 1rem;
`;

class Button extends Component {
  static get propTypes() {
    return {
      onClick: PropTypes.func.isRequired,
      text: PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      text: "Button",
    };
  }
  render() {
    return (
      <Block onClick={this.props.onClick}>
        <Text>{this.props.text}</Text>
      </Block>
    );
  }
}

export default Button;
