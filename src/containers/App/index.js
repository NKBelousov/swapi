import "normalize.css";
import React, { memo, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";

import * as routes from "~/constants/routes";
import Films from "~/containers/Films";
import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/containers/People";
import Planets from "~/containers/Planets";
import Starships from "~/containers/Starships";
import Preloader from "~/components/Utility/Preloader";

const PageNotFound = lazy(() => import("~/components/PageNotFound"));

const App = memo(() => (
  <main>
    <Nav />
    <Page>
      <Switch>
        <Route exact path={routes.PEOPLE} component={People} />
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
  </main>
));

export default App;
