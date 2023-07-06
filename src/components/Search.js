import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Context } from "..";
import SearchSvg from "../assets/img/search.svg";

const Search = observer(({ handleSearch }) => {
  const { searchStore } = useContext(Context);

  return (
    <div className="search__wrapper">
      <h1 className="search__title">Wikipedia Search</h1>
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="search__input"
          type="text"
          value={searchStore.searchQuery}
          placeholder="Поиск..."
          onChange={(e) => {
            searchStore.setSearchQuery(e.target.value);
          }}
        />
        <button className="search__btn" onClick={handleSearch}>
          <img src={SearchSvg} alt="Поиск" />
        </button>
      </form>
      <a
        class="search__btn-link"
        href="https://ru.wikipedia.org/wiki/Special:Random"
        target="_blank"
        rel="noreferrer"
      >
        Random!
      </a>
    </div>
  );
});

export default Search;
