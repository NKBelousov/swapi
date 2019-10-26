import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { map } from "lodash";
import React, { memo } from "react";

import DataFetcher from "~/components/Utility/DataFetcher";
import Starship from "~/components/Starship";
import { requestStarships } from '~/actions';

const Starships = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Starship key={name} name={name} />;
    })}
  </DataFetcher>
})

Starships.displayName = 'Starships'

const mapStateToProps = createSelector([state => state.starships], starships => ({ data: starships }))

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(requestStarships())
})


export default connect(mapStateToProps, mapDispatchToProps)(Starships);
