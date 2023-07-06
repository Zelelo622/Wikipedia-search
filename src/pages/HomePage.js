import React, { useContext } from "react";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import { observer } from "mobx-react";
import { Context } from "..";
import { searchWikipedia } from "../api/searchWikipedia";

const HomePage = observer(() => {
  const { searchStore } = useContext(Context);

  const handleSearch = async () => {
    searchWikipedia(searchStore);
  };

  return (
    <main className="main">
      <section className="search">
        <div className="container">
          <Search handleSearch={handleSearch} />
          <SearchResult searchResult={searchStore.searchResult} searchInfo={searchStore.searchInfo} />
        </div>
      </section>
    </main>
  );
});

export default HomePage;
