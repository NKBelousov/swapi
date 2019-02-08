import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { map } from "lodash";

const Navigation = styled.nav`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-size: 2em;
  padding: 1em;
`;

const Link = styled.a`
  border-bottom: 1px solid ${props => props.theme.secondary};
  cursor: pointer;
  margin: 0 0.5em;
  text-align: center;
`;

const ActiveLink = styled(Link)`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
`;

class Nav extends PureComponent {
  static get propTypes() {
    return {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
      onFilms: PropTypes.func.isRequired,
      onPeople: PropTypes.func.isRequired,
      onPlanets: PropTypes.func.isRequired,
    };
  }
  constructor(props) {
    super(props);
  }
  onLink(url) {
    switch (url) {
      case "/planets":
        this.props.onPlanets();
        break;
      case "/people":
        this.props.onPeople();
        break;
      case "/films":
        this.props.onFilms();
        break;
    }
  }
  render() {
    return (
      <Navigation>
        {map(this.props.items, l => {
          const props = {
            key: l.url,
            onClick: this.onLink.bind(this, l.url),
            children: l.name,
          };
          if (l.active) {
            return <ActiveLink {...props} />;
          } else {
            return <Link {...props} />;
          }
        })}
      </Navigation>
    );
  }
}

export default Nav;
