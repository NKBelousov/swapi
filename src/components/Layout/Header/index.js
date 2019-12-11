import PropTypes from "prop-types";
import React, { memo } from "react";
import styled from "styled-components";

const Title = styled.h1`
  border-bottom: 1px solid ${props => props.theme.secondary};
  color: ${props => props.theme.secondary};
  display: block;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 0rem;
`;

const Header = memo(({ tooltip, children }) => (
  <Title title={tooltip}>{children}</Title>
));

Header.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  tooltip: "",
  children: null,
};

export default Header;
