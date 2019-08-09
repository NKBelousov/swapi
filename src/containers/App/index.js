import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { find } from "lodash";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import * as Actions from "~/actions";
import Data from "~/prop-types/Data";
import Films from "~/containers/Films";
import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/containers/People";
import Planets from "~/containers/Planets";
import Routes from "~/prop-types/Routes";
import Theme from "~/constants/theme";
import Starships from "../Starships";

const mapStateToProps = state => ({
  people: state.people,
  planets: state.planets,
  films: state.films,
  starships: state.starships,
  routes: state.routes,
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
        goToPeople: PropTypes.func.isRequired,
        goToPlanets: PropTypes.func.isRequired,
        goToFilms: PropTypes.func.isRequired,
      }).isRequired,
      people: Data,
      planets: Data,
      films: Data,
      routes: Routes,
    };
  }
  renderPage() {
    const activeRoute = find(this.props.routes, route => route.active === true);
    switch (activeRoute.url) {
      case "/people":
        return (
          <People
            onRequest={this.props.actions.requestPeople}
            data={this.props.people}
          />
        );
      case "/planets":
        return (
          <Planets
            onRequest={this.props.actions.requestPlanets}
            data={this.props.planets}
          />
        );
      case "/films":
        return (
          <Films
            onRequest={this.props.actions.requestFilms}
            data={this.props.films}
          />
        );
      case "/starships":
        return (
          <Starships
            onRequest={this.props.actions.requestStarships}
            data={this.props.starships}
          />
        );
    }
  }
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <main>
          <Nav
            items={this.props.routes}
            onPlanets={this.props.actions.goToPlanets}
            onPeople={this.props.actions.goToPeople}
            onFilms={this.props.actions.goToFilms}
            onStarships={this.props.actions.goToStarships}
          />
          <Page>
            <Header tooltip="Page Header Tooltip">Swapi Client</Header>
            {this.renderPage()}
          </Page>
        </main>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
