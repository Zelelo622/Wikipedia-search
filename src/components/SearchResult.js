import { observer } from "mobx-react";
import React from "react";

const SearchResult = observer(({searchResult}) => {

  return (
    <div className="search__result">
      {searchResult.map((result, i) => (
        <div className="search__result-wrapper" key={i}>{result.title}</div>
      ))}
    </div>
  );
});

export default SearchResult;
