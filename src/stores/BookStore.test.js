// node filesystem module
import * as fs from 'fs'
import {when} from 'mobx'
import BookStore from './BookStore'

// use fs.readFileSync rather than fetch her
// cause no need to load fetch library just for tests if we have 
// access to filesystem
const Fetcher = () => Promise.resolve(JSON.parse(fs.readFileSync('./public/books.json')));

describe('bookstore', () => {
  const store = new BookStore(Fetcher);
  store.loadBooks();
  
  it('fetches data', done => {
    when(
      () => store.isLoading === false,
      () => {
        debugger;
        expect(store.books.size).toBe(4)
        expect(store.books.get("978-1933988177").price).toBe(30.50)
        done();
      }
    )
  });

  it('sorts data', done => {
    when(
      () => store.isLoading === false,
      () => {
        expect(store.sortedBooks.map(book => book.name)).toEqual([
          "Lucene in Action, Second Edition",
          "Sophie\'s World : The Greek Philosophers",
          "The Lightning Thief",
          "The Sea of Monsters"
        ]);
        done();
      }
    );
  });
});
