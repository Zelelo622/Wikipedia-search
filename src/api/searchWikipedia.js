export const searchWikipedia = async (searchStore) => {
  if (searchStore.searchQuery === "") return;
  const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchStore.searchQuery}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const json = await response.json();

  console.log(json);
  searchStore.setSearchResult(json.query.search);
  searchStore.setSearchInfo(json.query.searchinfo);
  console.log(searchStore.searchResult);
  console.log(searchStore.searchInfo);
};
