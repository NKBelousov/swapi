import { connect } from "react-redux";
import { map } from "lodash";
import React, { memo } from "react";
import styled from "styled-components";

import { SPECIES } from "~/constants/entities";
import { fetchSpecies } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";

const SpeciesEntry = styled.span`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.secondary};
`;

const Species = memo(props => {
  return (
    <>
      <Header tooltip="Species">Species</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { name } = d;
            return <SpeciesEntry key={name}>{name}</SpeciesEntry>;
          })
        }
      </DataFetcher>
    </>
  );
});

Species.displayName = "Species";

const mapStateToProps = createEntitySelector(SPECIES);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(fetchSpecies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Species);
