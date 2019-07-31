import React, { memo } from "react";
import { map } from "lodash";

import DataFetcher from "~/components/Utility/DataFetcher";
import Film from "~/components/Film";

const Films = memo(props => {
  return <DataFetcher {...props}>
    {data => map(data, d => {
      const { title } = d;
      return <Film key={title} title={title} />;
    })}
  </DataFetcher>
})

Films.displayName = 'Films'

export default Films;
