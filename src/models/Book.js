import {observable, computed, action} from "mobx";

class Book {
  @observable id 
  @observable name 
  @observable author
  @observable price 

  constructor({id, name, author, price}) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
  }
}

export { Book as default };