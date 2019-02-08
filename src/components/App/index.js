import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "~/actions";
import Data from "~/prop-types/Data";
import Films from "~/components/Films";
import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/components/People";
import Planets from "~/components/Planets";
import Routes from "~/prop-types/Routes";
import Theme from "~/constants/theme";

const mapStateToProps = state => ({
  people: state.people,
  planets: state.planets,
  films: state.films,
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
    let content = null;
    if (this.props.routes[0].active) {
      content = (
        <Planets
          onRequest={this.props.actions.requestPlanets}
          data={this.props.planets}
        />
      );
    } else if (this.props.routes[1].active) {
      content = (
        <People
          onRequest={this.props.actions.requestPeople}
          data={this.props.people}
        />
      );
    } else if (this.props.routes[2].active) {
      content = (
        <Films
          onRequest={this.props.actions.requestFilms}
          data={this.props.films}
        />
      );
    }
    return content;
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
