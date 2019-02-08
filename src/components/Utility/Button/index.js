import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Block = styled.div`
  background: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  cursor: pointer;
  display: block;
  margin: 0 auto;
  text-align: center;

  &:hover {
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
  }

  &:active {
    box-shadow: 0 0 15px #000 inset;
  }
`;

const Text = styled.span`
  font-size: 2rem;
  padding: 1rem;
`;

class Button extends PureComponent {
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
