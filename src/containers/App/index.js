import "normalize.css";
import React, { memo, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";

import * as routes from "~/constants/routes";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import Preloader from "~/components/Utility/Preloader";

const People = lazy(() => import("~/containers/People"));
const PersonInfo = lazy(() => import("~/containers/PersonInfo"));
const Films = lazy(() => import("~/containers/Films"));
const Planets = lazy(() => import("~/containers/Planets"));
const Starships = lazy(() => import("~/containers/Starships"));
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
        <Route
          exact
          path={routes.PEOPLE}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <People {...props} />
            </Suspense>
          )}
        />
        <Route
          path={routes.PERSON}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <PersonInfo {...props} />
            </Suspense>
          )}
        />
        <Route
          exact
          path={routes.FILMS}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <Films {...props} />
            </Suspense>
          )}
        />
        <Route
          exact
          path={routes.PLANETS}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <Planets {...props} />
            </Suspense>
          )}
        />
        <Route
          exact
          path={routes.STARSHIPS}
          render={props => (
            <Suspense fallback={<Preloader />}>
              <Starships {...props} />
            </Suspense>
          )}
        />
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
