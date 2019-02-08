import React, { PureComponent } from "react";
import { map } from "lodash";
import styled from "styled-components";

import Button from "~/components/Utility/Button";
import Person from "~/components/Person";
import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/modes";

const Container = styled.div``;

class People extends PureComponent {
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
            const { name } = d;
            return <Person key={name} name={name} />;
          })}
        </Container>
      );
    }
  }
}

export default People;
