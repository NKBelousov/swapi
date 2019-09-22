import React, { memo } from "react";

import Button from "~/components/Utility/Button";
import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/statuses";

const DataFetcher = memo(props => {
  if (props.data.status === NONE) {
    return <Button onClick={props.onRequest}>Request</Button>;
  }
  if (props.data.status === LOADING) {
    return <Preloader />;
  }
  if (props.data.status === READY) {
    return props.children(props.data.data)
  }
})

DataFetcher.propTypes = Data

DataFetcher.displayName = 'DataFetcher'

export default DataFetcher;
