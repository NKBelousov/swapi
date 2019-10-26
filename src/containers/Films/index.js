import React, { memo } from "react";
import { map } from "lodash";
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import DataFetcher from "~/components/Utility/DataFetcher";
import Film from "~/components/Film";
import { requestFilms } from "~/actions";

const Films = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { title } = d;
      return <Film key={title} title={title} />;
    })}
  </DataFetcher>
})

Films.displayName = 'Films'

const mapStateToProps = createSelector([state => state.films], films => ({ data: films }))

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(requestFilms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Films);
