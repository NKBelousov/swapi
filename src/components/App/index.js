import PropTypes from "prop-types";
import Data from "~/prop-types/Data";
import Routes from "~/prop-types/Routes";

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "~/actions";
import { map, find } from "lodash";

import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";

import Button from "~/components/Utility/Button";

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
        requestPeople: PropTypes.func.isRequired,
        goToPeople: PropTypes.func.isRequired,
        goToPlanets: PropTypes.func.isRequired,
      }).isRequired,
      people: Data,
      planets: Data,
      routes: Routes,
    };
  }
  constructor(props) {
    super(props);

    this.renderPage = this.renderPage.bind(this);
  }
  renderPage() {
    return (
      <div>
        <h1>{find(this.props.routes, { active: true }).name}</h1>
        <div>
          <Button
            text="Click me"
            onClick={() => this.props.actions.requestPeople()}
          />
          {map(this.props.people.data, d => {
            return <h1>{d.name}</h1>;
          })}
        </div>
      </div>
    );
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
          <Header tooltip="Page Header Tooltip">{this.renderPage()}</Header>
        </Page>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
