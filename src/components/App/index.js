import PropTypes from "prop-types";
import Data from "~/prop-types/Data";
import Routes from "~/prop-types/Routes";

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "~/actions";

import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import People from "~/components/People";
import Planets from "~/components/Planets";

const mapStateToProps = state => ({
  people: state.people,
  planets: state.planets,
  routes: state.routes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class App extends Component {
  static get propTypes() {
    return {
      actions: PropTypes.shape({
        requestPlanets: PropTypes.func.isRequired,
        requestPeople: PropTypes.func.isRequired,
        goToPeople: PropTypes.func.isRequired,
        goToPlanets: PropTypes.func.isRequired,
      }).isRequired,
      people: Data,
      planets: Data,
      routes: Routes,
    };
  }
  render() {
    return (
      <main>
        <Nav
          items={this.props.routes}
          onPlanets={this.props.actions.goToPlanets}
          onPeople={this.props.actions.goToPeople}
        />
        <Page>
          <Header tooltip="Page Header Tooltip">Swapi Client</Header>
          <br />
          <h1>Planets</h1>
          <Planets
            onRequest={this.props.actions.requestPlanets}
            data={this.props.planets}
          />
          <br />
          <h1>People</h1>
          <People
            onRequest={this.props.actions.requestPeople}
            data={this.props.people}
          />
        </Page>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
