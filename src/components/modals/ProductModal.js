import productStore from "../../stores/productStore";
import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";

const ProductModal = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
    console.log(product);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.createProduct(product);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="img"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled>Create</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
