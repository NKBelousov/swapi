import { connect } from "react-redux";
import { map } from "lodash";
import React, { memo } from "react";
import styled from "styled-components";

import { VEHICLES } from "~/constants/entities";
import { fetchVehicles } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";

const Vehicle = styled.div`
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.secondary};
`;

const Vehicles = memo(props => {
  return (
    <>
      <Header tooltip="Vehicles">Vehicles</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { name } = d;
            return <Vehicle>{name}</Vehicle>;
          })
        }
      </DataFetcher>
    </>
  );
});

Vehicles.displayName = "Vehicles";

const mapStateToProps = createEntitySelector(VEHICLES);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(fetchVehicles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicles);
