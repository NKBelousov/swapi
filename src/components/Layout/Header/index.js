import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h1`
  border-bottom: 1px solid #db2c2c;
  display: block;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 0rem;
`;

class Header extends Component {
  static get propTypes() {
    return {
      tooltip: PropTypes.string,
      children: PropTypes.node,
    };
  }
  render() {
    return <Title title={this.props.tooltip}>{this.props.children}</Title>;
  }
}

export default Header;
