import { makeAutoObservable } from "mobx";

export default class SearchStore {
  constructor() {
    this._searchQuery = "";
    this._searchResult = [];
    this._searchInfo = {};
    makeAutoObservable(this);
  }

  setSearchQuery(searchQuery) {
    this._searchQuery = searchQuery;
  }

  setSearchResult(searchResult) {
    this._searchResult = searchResult;
  }

  setSearchInfo(searchInfo) {
    this._searchInfo = searchInfo;
  }

  get searchQuery() {
    return this._searchQuery;
  }

  get searchResult() {
    return this._searchResult;
  }

  get searchInfo() {
    return this._searchInfo;
  }
}
