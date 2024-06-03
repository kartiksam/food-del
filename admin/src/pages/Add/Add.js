import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "./../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
// placeholder property to show inside box what have return
const Add = () => {
  const url = "http://localhost:4000";
  // diff for image -use effect
  const [image, setImage] = useState(false);
  // category selected as sald becuse whenever we reload the page default category will be salad
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name; // this is name of every prop and below is value of that
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    // response here and the data and suucess define ther true or flade
    if (response.data.success) {
      setData({
        name: "",
        description: " ",
        price: "",
        category: "salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  // whenever the data changes like 1st we type k then one object then other letter then new obj generte and save till last letter and then go to db
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* to show the image previuew if we have uploadded the image if true then display that image */}
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload area"
            />
          </label>
          {/* hidde required thats why choose file is not visible */}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          {/* we will make controlled input field onchangehandlewr whenever we change anything in this input field it will refelct ini the state variable */}
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write  content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category-price flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="salad">Salad</option>
              <option value="rolls">Rolls</option>
              <option value="deserts">Desert</option>
              <option value="sandwitch">Sandwitch</option>
              <option value="cake">Cake</option>
              <option value="pure-veg">Pure-veg</option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
