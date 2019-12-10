import React, { memo } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.span`
  color: ${props => props.theme.secondary};
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
  border: 4px solid ${props => props.theme.secondary};
  border-radius: 50%;
  border-top: 4px solid ${props => props.theme.primary};
  display: inline-block;
  height: 1rem;
  transition: transform 0.3s linear;
  width: 1rem;
`;

const Preloader = memo(({ children }) => (
  <Wrapper>
    <Loader />
    <Text>{children}</Text>
  </Wrapper>
));

Preloader.displayName = "Preloader";

Preloader.defaultProps = {
  children: "Loading...",
};

export default Preloader;
