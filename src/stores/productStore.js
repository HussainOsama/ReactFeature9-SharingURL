import products from "../products";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];
  constructor() {
    makeObservable(this, {
      products: observable,
      deleteProduct: action,
      createProduct: action,
    });
  }

  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
    } catch {
      console.error("404 Page Not Found");
    }
  };

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
productStore.fetchProducts();

export default productStore;
