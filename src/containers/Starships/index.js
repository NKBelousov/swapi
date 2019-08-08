import React, { memo } from "react";
import { map } from "lodash";

import DataFetcher from "~/components/Utility/DataFetcher";
import Starship from "~/components/Starship";

const Starships = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Starship key={name} name={name} />;
    })}
  </DataFetcher>
})

Starships.displayName = 'Starships'

export default Starships;
