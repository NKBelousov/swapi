import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "~/actions";

import Nav from "~/components/Nav";

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

class App extends Component {
  render() {
    return (
      <main>
        <Nav />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
