import React, { Component } from "react";
import { map } from "lodash";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Navigation = styled.nav`
  background: red;
  color: #fff;
  font-size: 2em;
  padding: 1em;
`;

const Link = styled.a`
  border-bottom: 1px solid #fff;
  cursor: pointer;
  margin: 0 0.5em;
  text-align: center;
`;

class Nav extends Component {
  static get propTypes() {
    return {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
      onPlanets: PropTypes.func.isRequired,
      onPeople: PropTypes.func.isRequired,
    };
  }
  constructor(props) {
    super(props);
  }
  onLink(url) {
    if (url === "/planets") {
      this.props.onPlanets();
    } else {
      this.props.onPeople();
    }
  }
  render() {
    return (
      <Navigation>
        {map(this.props.items, l => {
          return (
            <Link key={l.url} onClick={this.onLink.bind(this, l.url)}>
              {l.name}
            </Link>
          );
        })}
      </Navigation>
    );
  }
}

export default Nav;
