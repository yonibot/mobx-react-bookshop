import CartEntry from '../models/CartEntry';
import { observable, action, computed } from 'mobx';

class CartStore {
  @observable entries = [];

  constructor(bookStore) {
    this.bookStore = bookStore;
  }

  @computed get subTotal() {
    return this.entries.reduce((sum,entry) => {
      return sum + entry.price
    }, 0);
  }

  @computed get hasDiscount() {
    return this.subTotal >= 100;
  }

  @computed get discount() {
    return this.subTotal * (this.hasDiscount ? 0.1 : 0);
  }

  @computed get canCheckout() {
    return this.entries.length > 0 && this.entries.every(entry => entry.quantity > 0);
  }

  @action addBook(book) {
    let entry = this.entries.find(entry => entry.book === book);
    if (!entry) {
      entry = new CartEntry(book);
      this.entries.push(entry);
    }
    entry.quantity += 1;
  }

  @action clear() {
    this.entries.clear();
  }
}
