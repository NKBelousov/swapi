import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { map } from "lodash";
import React, { memo } from "react";

import DataFetcher from "~/components/Utility/DataFetcher";
import Person from "~/components/Person";
import { requestPeople } from '~/actions';

const People = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Person key={name} name={name} />;
    })}
  </DataFetcher>
})

People.displayName = 'People'

const mapStateToProps = createSelector([state => state.people], people => ({ data: people }))

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(requestPeople())
})


export default connect(mapStateToProps, mapDispatchToProps)(People);
