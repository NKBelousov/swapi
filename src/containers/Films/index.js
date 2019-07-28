import React, { memo } from "react";
import { map } from "lodash";
import styled from "styled-components";

import Button from "~/components/Utility/Button";
import Film from "~/components/Film";
import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/modes";

const Container = styled.div``;

const Films = memo(props => {
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
          const { title } = d;
          return <Film key={title} title={title} />;
        })}
      </Container>
    );
  }
})

Films.propTypes = Data

Films.displayName = 'Films'

export default Films;
