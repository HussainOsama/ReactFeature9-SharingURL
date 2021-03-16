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

  //Works
  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
    } catch {
      console.error("404 Page Not Found");
    }
  };

  //Works
  deleteProduct = async (productId) => {
    try {
      axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => productId !== product.id
      );
    } catch (error) {
      console.log("CookieStore -> deleteCookie -> error", error);
    }
  };

  createProduct = async (product) => {
    // product.id = products[products.length - 1].id + 1;
    // product.slug = slugify(product.name);
    // this.products.push(product);

    try {
      console.log(product);
      const res = await axios.post("http://localhost:8000/products", product);
      this.products.push(res.data);
    } catch (error) {
      console.log("CookieStore -> createCookie -> error", error);
    }
  };

  // Still need Update function
}

let productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
