import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";

import Image from "~/components/Layout/Image";

const border = "5px";
const width = "25.0%";
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
    border: ${border} solid ${props => props.theme.secondary};
  }
`;

const Item = styled.div`
  margin: 1em;

  & + & {
    margin-top: 20px;
  }
`;

const Value = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 1.5em;
  text-align: center;
`;

class Film extends PureComponent {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    };
  }
  static get defaultProps() {
    return {
      title: "",
      url: "",
    };
  }
  render() {
    return (
      <Wrapper>
        <Image url={this.props.url} />
        <Item>
          <Value>{this.props.title}</Value>
        </Item>
      </Wrapper>
    );
  }
}

export default Film;
