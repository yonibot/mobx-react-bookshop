import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import BookStore from './stores/BookStore';

const fetcher = url => window.fetch(url).then(r=>r.json());
const bookStore = new BookStore(fetcher);

// Hydrate initial state
bookStore.loadBooks();

ReactDOM.render(
  <App bookStore={bookStore} />,
  document.getElementById('root')
)

