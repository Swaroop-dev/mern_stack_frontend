import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategories, createProduct } from "./helper/adminapicall";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const warningMessage = () => {
    if (error) {
      return (
        <h4 className="text-red">
          oops!! we could not create category for you
        </h4>
      );
    }
  };

  useEffect(() => {
    const preload = () => {
      getCategories()
        .then((data) => {
          if (data?.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({
              ...values,
              categories: data.categories,
              formData: new FormData(),
            });
            console.log(categories);
          }
        })
        .catch((err) => console.log(err));
    };
    preload();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    createProduct(user._id, token, formData)
      .then((data) => {
        if (data?.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            photo: "",
            loading: false,
            createdProduct: data.name,
            getaRedirect: true,
            formData: "",
          });
        }
      })
      .catch((er) => console.log(er));
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? "" : "none" }}
      >
        {createProduct} created succesfully
      </div>
    );
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {warningMessage()}
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
