import React, { Component } from "react";
import PropTypes from "prop-types";

import styled, { keyframes } from "styled-components";
import { PRIMARY, SECONDARY } from "~/constants/theme";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.span`
  color: ${PRIMARY};
  font-size: 2rem;
  padding: 1rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate} 2s linear infinite;
  border: 4px solid ${SECONDARY};
  border-radius: 50%;
  border-top: 4px solid ${PRIMARY};
  display: inline-block;
  height: 1rem;
  transition: transform 0.3s linear;
  width: 1rem;
`;

class Preloader extends Component {
  static get propTypes() {
    return {
      text: PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      text: "Loading...",
    };
  }
  render() {
    return (
      <Wrapper>
        <Loader />
        <Text>{this.props.text}</Text>
      </Wrapper>
    );
  }
}

export default Preloader;
