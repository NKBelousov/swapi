import React, { memo } from "react";
import { map } from "lodash";

import DataFetcher from "~/components/Utility/DataFetcher";
import Person from "~/components/Person";

const People = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { name } = d;
      return <Person key={name} name={name} />;
    })}
  </DataFetcher>
})

People.displayName = 'People'

export default People;
