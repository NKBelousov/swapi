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
  static get defaultProps() {
    return {
      links: [
        {
          name: "Home",
          url: "/home",
        },
        {
          name: "About",
          url: "/about",
        },
        {
          name: "Contacts",
          url: "/contacts",
        },
      ],
    };
  }
  constructor(props) {
    super(props);
  }
  onLink(url) {
    window.location = url;
  }
  render() {
    return (
      <Navigation>
        {map(this.props.links, l => {
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
