import React, { memo } from "react";
import styled from "styled-components";
import { map } from "lodash";
import { Link } from 'react-router-dom'

import * as routes from '~/constants/routes'
import { devices } from '~/constants/media'

const Navigation = styled.nav`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-size: 2em;
  padding: 1em;
`;

const TextLink = styled.span`
  border-bottom: 1px solid ${props => props.theme.secondary};
  cursor: pointer;
  margin: 0 0.5em;
  text-align: center;

  ${devices.mobile} {
    display: block;
  }
`;

const ActiveLink = styled(TextLink)`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
`;

const Nav = memo(({ items }) => {
  return (
    <Navigation>
      {map(items, l => {
        const props = {
          key: l.url,
          children: l.name,
        };
        return <Link key={l.url} to={l.url}>
          {l.active
            ? <ActiveLink {...props} />
            : <TextLink {...props} />}
        </Link>
      })}
    </Navigation>
  );
})

Nav.defaultProps = {
  items: [{
    url: routes.PEOPLE,
    name: 'People'
  }, {
    url: routes.FILMS,
    name: 'Films',
  }, {
    url: routes.PLANETS,
    name: 'Planets',
  }, {
    url: routes.STARSHIPS,
    name: 'Starships'
  }]
}

Nav.displayName = 'Nav'

export default Nav;
