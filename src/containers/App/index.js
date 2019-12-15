import "normalize.css";
import React, { memo, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";

import * as routes from "~/constants/routes";
import Films from "~/containers/Films";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/containers/People";
import Planets from "~/containers/Planets";
import Starships from "~/containers/Starships";
import Preloader from "~/components/Utility/Preloader";

const PersonInfo = lazy(() => import("~/containers/PersonInfo"));
const PageNotFound = lazy(() => import("~/components/PageNotFound"));

const Background = styled.div`
  background: #000;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const App = memo(() => (
  <Background>
    <Nav />
    <Page>
      <Switch>
        <Route exact path={routes.PEOPLE} component={People} />
        <Route
          path={routes.PERSON}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <PersonInfo {...props} />
            </Suspense>
          )}
        />
        <Route exact path={routes.FILMS} component={Films} />
        <Route exact path={routes.PLANETS} component={Planets} />
        <Route exact path={routes.STARSHIPS} component={Starships} />
        <Route
          render={props => (
            <Suspense fallback={<Preloader />}>
              <PageNotFound {...props} />
            </Suspense>
          )}
        />
      </Switch>
    </Page>
  </Background>
));

export default App;
