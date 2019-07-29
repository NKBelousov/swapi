import React, { memo } from "react";
import { map } from "lodash";
import styled from "styled-components";

import Button from "~/components/Utility/Button";
import Person from "~/components/Person";
import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/modes";

const Container = styled.div``;

const People = memo(props => {
  if (props.data.status === NONE) {
    return <Button onClick={props.onRequest} text="Request" />;
  }
  if (props.data.status === LOADING) {
    return <Preloader />;
  }
  if (props.data.status === READY) {
    return (
      <Container>
        {map(props.data.data, d => {
          const { name } = d;
          return <Person key={name} name={name} />;
        })}
      </Container>
    );
  }
})

People.propTypes = Data

People.displayName = 'People'

export default People;
