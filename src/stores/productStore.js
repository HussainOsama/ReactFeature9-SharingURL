import products from "../products";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      deleteProduct: action,
      createProduct: action,
    });
  }

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => productId !== product.id);
  };

  createProduct = (product) => {
    product.id = products[products.length - 1].id + 1;
    product.slug = slugify(product.name);
    this.products.push(product);
  };
}

let productStore = new ProductStore();

export default productStore;
