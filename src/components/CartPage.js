import React, {children} from 'react'
import './CartPage.css'
import {observer} from 'mobx-react';

function updateQuantity(e) {
  this.quantity = parseInt(e.target.value);
}

const CartItem = observer(({entry}) => {
  const {book} = entry;
  let updateQuantity = (e) => {
    entry.quantity = e.target.value;
  };
  return (
    <div className="Page-cart-item">
      <p><a href="#">{ book.name }</a></p>
      <div className="Page-cart-item-details">
        <p>Amount: <input value={entry.quantity} onChange={updateQuantity.bind(entry)}/>
         total: <b>{entry.price} €</b>
        </p>
      </div>
    </div>
  )
})

const CartList = observer(({entries, children}) => (
  <section className="Page-cart-items">
    {children}
  </section>
))

const CartPage = observer(({cartStore}) => (
  <section className="Page-cart">
    <h2>Your cart</h2>
    <CartList>
      {cartStore.entries.map(entry => (
        <CartItem entry={entry} key={entry.book.id} />
      ))}
    </CartList>
    <p>Subtotal: 120 €</p>
    <p><i>Large order discount: 12 €</i></p>
    <p><b>Total: 108 €</b></p>
    <button disabled="disabled">Submit order</button>
  </section>
))

export default CartPage
