import { connect } from "react-redux";
import { map } from "lodash";
import React, { memo } from "react";

import { PLANETS } from "~/constants/entities";
import { fetchPlanets } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";
import Planet from "~/components/Planet";

const Planets = memo(props => {
  return (
    <>
      <Header tooltip="Planets">Planets</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { name, url } = d;
            return <Planet key={name} name={name} url={url} />;
          })
        }
      </DataFetcher>
    </>
  );
});

Planets.displayName = "Planets";

const mapStateToProps = createEntitySelector(PLANETS);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(fetchPlanets()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets);
