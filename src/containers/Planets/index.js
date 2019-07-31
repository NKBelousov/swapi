import React, { memo } from "react";
import { map } from "lodash";

import DataFetcher from "~/components/Utility/DataFetcher";
import Planet from "~/components/Planet";

const Planets = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Planet key={name} name={name} />;
    })}
  </DataFetcher>
})

Planets.displayName = 'Planets'

export default Planets;
