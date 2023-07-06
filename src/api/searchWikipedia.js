import axios from "axios";

export const searchWikipedia = async (searchStore) => {
  if (searchStore.searchQuery === "") return;
  const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=40&srsearch=${searchStore.searchQuery}`;
  axios.get(endpoint).then((res) => {
    const persons = res.data;
    console.log(persons);
    searchStore.setSearchResult(persons.query.search);
    searchStore.setSearchInfo(persons.query.searchinfo);
  });
};
