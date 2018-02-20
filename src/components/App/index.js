import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "~/actions";
import { find } from "lodash";

import Header from "~/components/Layout/Header";
import Nav from "~/components/Layout/Nav";
import Page from "~/components/Layout/Page";
import Preloader from "~/components/Utility/Preloader";

const mapStateToProps = state => ({
  people: state.people,
  routes: state.routes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.renderPage = this.renderPage.bind(this);
  }
  renderPage() {
    return find(this.props.routes, { active: true }).name;
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
