import React, { memo } from "react";
import { map } from "lodash";
import { connect } from "react-redux";

import { FILMS } from "~/constants/entities";
import { fetchFilms } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Film from "~/components/Film";
import Header from "~/components/Layout/Header";

const Films = memo(props => {
  return (
    <>
      <Header tooltip="Films">Films</Header>
      <DataFetcher {...props}>
        {data =>
          map(data, d => {
            const { title } = d;
            return <Film key={title} title={title} />;
          })
        }
      </DataFetcher>
    </>
  );
});

Films.displayName = "Films";

const mapStateToProps = createEntitySelector(FILMS);

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(fetchFilms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
