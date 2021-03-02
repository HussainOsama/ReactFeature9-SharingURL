// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
import AddButton from "./buttons/AddButton";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        selectProduct={props.selectProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(ProductList);
