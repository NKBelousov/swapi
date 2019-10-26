import 'normalize.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Route, Switch } from 'react-router'

import * as routes from "~/constants/routes";
import * as Actions from "~/actions";
import Data from "~/prop-types/Data";
import Films from "~/containers/Films";
import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/containers/People";
import Planets from "~/containers/Planets";
import Starships from "~/containers/Starships";

const mapStateToProps = state => ({
  people: state.people,
  planets: state.planets,
  films: state.films,
  starships: state.starships,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class App extends PureComponent {
  static get propTypes() {
    return {
      actions: PropTypes.shape({
        requestPlanets: PropTypes.func.isRequired,
        requestPeople: PropTypes.func.isRequired,
        requestFilms: PropTypes.func.isRequired,
      }).isRequired,
      people: Data,
      planets: Data,
      films: Data,
    };
  }
  render() {
    return (
      <main>
        <Nav />
        <Page>
          <Header tooltip="Page Header Tooltip">Swapi Client</Header>
          <Switch>
            <Route exact path={routes.FILMS} component={Films} />
            <Route exact path={routes.PLANETS} component={Planets} />
            <Route exact path={routes.STARSHIPS} component={Starships} />
            <Route component={People} />
          </Switch>
        </Page>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
