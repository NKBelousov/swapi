import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px #000;
  margin: 1rem 0 0 0;
  padding: 1rem;
`;

class Page extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
    };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return <Content>{this.props.children}</Content>;
  }
}

export default Page;
