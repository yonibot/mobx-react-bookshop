import Book from "../models/Book";
import {observable, action, computed} from 'mobx';

class BookStore {
  @observable isLoading = false;
  books = observable.map();

  constructor(fetch) {
    this.fetch = fetch;
  }

  @computed get sortedBooks() {
    const books = this.books.values();
    return books.sort((a,b) => {
      return a.name > b.name
        ? 1
        : a.name === b.name
          ? 0
          : -1
    })
  }

  @action loadBooks() {
    this.loading = true;
    this.fetch("books.json")
      .then(json => {
        this.updateBooks(json);
        this.isLoading = false;
      })
      .catch(err => {
        console.error("Failed to load books", err);
      })
  }

  @action updateBooks(json) {
    this.books.clear();
    json.forEach(book => {
      this.books.set(book.id, new Book(book))
    })
  }



}

export { BookStore as default };