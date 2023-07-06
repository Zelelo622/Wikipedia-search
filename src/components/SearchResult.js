import { observer } from "mobx-react";
import React from "react";

const SearchResult = observer(({ searchResult, searchInfo }) => {
  return (
    <div className="search__result">
      <p className="search__result-total">
        {searchInfo.totalhits ? "Search Result: " + searchInfo.totalhits : ""}
      </p>
      {searchResult.map((result, i) => {
        const url = `https://ru.wikipedia.org/?curid=${result.pageid}`;
        return (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="search__result-link"
            key={i}
          >
            <div className="search__result-wrapper">
              <h3 className="search__result-title">{result.title}</h3>
              <p
                className="search__result-text"
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              ></p>
            </div>
          </a>
        );
      })}
    </div>
  );
});

export default SearchResult;
