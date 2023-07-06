import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "..";

const Search = observer(({ handleSearch }) => {
  const { searchStore } = useContext(Context);

  return (
    <div className="search__wrapper">
      <input
        className="search__input"
        type="text"
        value={searchStore.searchQuery}
        onChange={(e) => {
          searchStore.setSearchQuery(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
});

export default Search;
