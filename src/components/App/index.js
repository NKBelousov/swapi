import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "~/actions";

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
  render() {
    return (
      <main>
        <Nav items={this.props.routes} />
        <Page>
          <Header tooltip="Page Header Tooltip">Page Header</Header>
        </Page>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
