import { useState } from "react";
import { createProduce } from "../utility/controller.mjs";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stocked: false,
    category: "Vegetables",
  });

  function handleClick(e) {
    nav("/");
  }

  function handleChange(e) {
    if (e.target.name == "stocked") {
      setFormData({
        ...formData,
        stocked: !formData.stocked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      let res = await createProduce(formData);
      nav("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h2>Create Produce</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input onChange={handleChange} type="text" name="name" />
        </label>
        <br />
        <label>
          Price: <input onChange={handleChange} type="number" name="price" />
        </label>
        <br />
        <label>
          In Stock:{" "}
          <input onChange={handleChange} type="checkbox" name="stocked" />
        </label>
        <br />
        <label>
          Category:{" "}
          <select onChange={handleChange} type="text" name="category">
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
      <button onClick={handleClick}>Close Form</button>
    </>
  );
}

export default CreateForm;
