import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'

import BooksPage from "./BooksPage"
import BookDetails from "./BookDetails"
import CartPage from "./CartPage";
import {observer} from 'mobx-react';

const AppHeader = observer(({bookStore}) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to the React MobX Book shop!</h2>
    <h3>Data is { bookStore.isLoading ? "Loading..." : "Done."}</h3>
  </div>
))

const AppMenu = ({children}) => (
  <ul className="App-menu">
    {children}
  </ul>
)

const AppMenuItem = ({onClick, children}) => (
    <li>
      <a onClick={onClick}>{children}</a>
    </li>
)

class App extends Component {
  constructor(p, x) {
    super(p, x)
    this.state = {
      page: "books",
      selectedBook: null
    }
  }

  renderPage() {
    switch(this.state.page) {
      case "books":
        return <BooksPage openBookPage={this.openBookPage} bookStore={this.props.bookStore} />
      case "book":
        return <BookDetails book={this.state.selectedBook} cartStore={this.props.cartStore}/>
      case "cart":
        return <CartPage cartStore={this.props.cartStore} />
      default:
        return "Sry, not found"
    }
  }

  openBooksPage = () => {
    this.setState({
      page: "books",
      selectedBook: null
    })
  }

  openBookPage = (book) => {
    this.setState({
      page: "book",
      selectedBook: book
    })
  }

  openCartPage = () => {
    this.setState({
      page: "cart",
      selectedBook: null
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader bookStore={this.props.bookStore} />
        <AppMenu>
          <AppMenuItem onClick={this.openBooksPage}>Available books</AppMenuItem>
          <AppMenuItem onClick={this.openCartPage}>Your cart</AppMenuItem>
        </AppMenu>
        {this.renderPage()}
      </div>
    )
  }

}


export default App
