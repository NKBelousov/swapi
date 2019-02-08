import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  border-bottom: 1px solid ${props => props.theme.primary};
  display: block;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 0rem;
`;

class Header extends PureComponent {
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
