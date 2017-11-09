import React from 'react'
import PropTypes from 'prop-types';

const BookDetails = ({book, cartStore}) => (
  <section className="Page-book">
    <h2>{book.name}</h2>
    <p><i>By: {book.author}</i></p>
    <p>Price: ${book.price}€</p>
    <button onClick={cartStore.addBook(book)}>Add to cart</button>
  </section>
)

BookDetails.propTypes = {
  book: PropTypes.object,
  cartStore: PropTypes.object
}

export default BookDetails
