import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import BookStore from './stores/BookStore';
import CartStore from './stores/CartStore';

const fetcher = url => {
  return window.fetch(url).then(r=>r.json());
}
const bookStore = new BookStore(fetcher);
const cartStore = new CartStore(bookStore);

// Hydrate initial state
bookStore.loadBooks();

window.cartStore = cartStore;

ReactDOM.render(
  <App bookStore={bookStore} cartStore={cartStore} />,
  document.getElementById('root')
)

