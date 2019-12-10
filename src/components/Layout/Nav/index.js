import { Link } from "react-router-dom";
import { map } from "lodash";
import { withRouter } from "react-router";
import React, { memo } from "react";
import styled from "styled-components";

import * as routes from "~/constants/routes";
import { devices } from "~/constants/media";

const Navigation = styled.nav`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-size: 2em;
  padding: 1em;
`;

const TextLink = styled(Link)`
  color: ${props => props.theme.secondary};
  border-bottom: 1px solid ${props => props.theme.secondary};
  cursor: pointer;
  text-decoration: none;
  margin: 0 0.5em;
  text-align: center;
  padding: 0.5em;

  ${devices.mobile} {
    display: block;
  }
`;

const ActiveLink = styled(TextLink)`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
`;

const Nav = memo(({ items, history }) => {
  return (
    <Navigation>
      {map(items, l => {
        const props = {
          children: l.name,
          key: l.url,
          to: l.url,
        };
        return history.location.pathname === l.url ? (
          <ActiveLink {...props} />
        ) : (
          <TextLink {...props} />
        );
      })}
    </Navigation>
  );
});

Nav.defaultProps = {
  items: [
    {
      url: routes.PEOPLE,
      name: "People",
    },
    {
      url: routes.FILMS,
      name: "Films",
    },
    {
      url: routes.PLANETS,
      name: "Planets",
    },
    {
      url: routes.STARSHIPS,
      name: "Starships",
    },
  ],
};

Nav.displayName = "Nav";

export default withRouter(Nav);
