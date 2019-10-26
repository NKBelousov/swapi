import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { map } from "lodash";
import React, { memo } from "react";

import DataFetcher from "~/components/Utility/DataFetcher";
import Planet from "~/components/Planet";
import { requestPlanets } from '~/actions';

const Planets = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Planet key={name} name={name} />;
    })}
  </DataFetcher>
})

Planets.displayName = 'Planets'

const mapStateToProps = createSelector([state => state.planets], planets => ({ data: planets }))

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(requestPlanets())
})


export default connect(mapStateToProps, mapDispatchToProps)(Planets);
