import { connect } from "react-redux";
import { map } from "lodash";
import React, { memo } from "react";

import { PEOPLE } from "~/constants/entities";
import { fetchPeople } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";
import Person from "~/components/Person";

const People = memo(props => {
  return (
    <>
      <Header tooltip="People">People</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { name } = d;
            return <Person key={name} name={name} />;
          })
        }
      </DataFetcher>
    </>
  );
});

People.displayName = "People";

const mapStateToProps = createEntitySelector(PEOPLE);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(fetchPeople()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
