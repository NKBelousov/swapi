import React, { memo, useEffect } from "react";

import Preloader from "~/components/Utility/Preloader";

import Data from "~/prop-types/Data";
import { NONE, LOADING, READY } from "~/constants/statuses";

const DataFetcher = memo(props => {
  useEffect(() => {
    if (props.data.status === NONE) {
      props.onRequest();
    }
  }, [props.data.status, props.onRequest]);

  if (props.data.status === LOADING) {
    return <Preloader />;
  }

  if (props.data.status === READY) {
    return props.children(props.data.data);
  }
  return null;
});

DataFetcher.propTypes = Data;

DataFetcher.displayName = "DataFetcher";

export default DataFetcher;
