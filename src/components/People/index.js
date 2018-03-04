import React, { Component } from "react";
import { map } from "lodash";
import styled from "styled-components";

import Button from "~/components/Utility/Button";
import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/modes";

const Container = styled.div`
  padding: 1em;
`;

const Item = styled.div`
  padding: 1em;
`;

class People extends Component {
  static get propTypes() {
    return Data;
  }
  render() {
    if (this.props.data.status === NONE) {
      return <Button onClick={this.props.onRequest} text="Request" />;
    }
    if (this.props.data.status === LOADING) {
      return <Preloader />;
    }
    if (this.props.data.status === READY) {
      return (
        <Container>
          {map(this.props.data.data, d => {
            return <Item>{d.name}</Item>;
          })}
        </Container>
      );
    }
  }
}

export default People;
