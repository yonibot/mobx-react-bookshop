import React from 'react'
import {observer} from 'mobx-react';

const BooksPage = observer(({openBookPage, bookStore}) => (
  <section className="Page-books">
    <h1>Available books</h1>
    <ol>
      {
        bookStore.sortedBooks.map(book => (
          <BookEntry book={book} onClickEntry={openBookPage} />
        ))
      }
    </ol>
  </section>
))

const BookEntry = observer(({onClickEntry, book}) => (
  <li>
    <a onClick={() => onClickEntry(book)}>{book.name}</a>
  </li>
))

export default BooksPage