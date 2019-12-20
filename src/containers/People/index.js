import { connect } from "react-redux";
import React, { memo, useState, useCallback } from "react";

import { PEOPLE } from "~/constants/entities";
import { fetchPeople } from "~/actions";
import createEntitySelector from "~/selectors/createEntitySelector";
import DataFetcher from "~/components/Utility/DataFetcher";
import Header from "~/components/Layout/Header";
import Person from "~/components/Person";
import Search from "~/components/Search";

const People = memo(props => {
  const [search, setSearch] = useState("");

  const callback = useCallback(event => setSearch(event.target.value), [
    setSearch,
  ]);

  const iteratee = useCallback(
    item => item.name.toLowerCase().includes(search.toLowerCase()),
    [search]
  );

  return (
    <>
      <Header tooltip="People">People</Header>
      <Search value={search} placeholder="Search" onChange={callback} />
      <DataFetcher {...props}>
        {data =>
          data.filter(iteratee).map(d => {
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
