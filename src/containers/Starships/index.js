import { connect } from "react-redux";
import { map } from "lodash";
import React, { memo } from "react";

import { requestStarships } from "~/actions";
import { STARSHIPS } from "~/constants/entities";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";
import Starship from "~/components/Starship";

const Starships = memo(props => {
  return (
    <>
      <Header tooltip="Starships">Starships</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { name } = d;
            return <Starship key={name} name={name} />;
          })
        }
      </DataFetcher>
    </>
  );
});

Starships.displayName = "Starships";

const mapStateToProps = createEntitySelector(STARSHIPS);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(requestStarships()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships);
