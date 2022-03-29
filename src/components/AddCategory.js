import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategory }) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    setInput(value);
  }

  function addCategory(e) {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCategory((category) => [...category, input]);
      setInput("");
    }
  }

  return (
    <form onSubmit={addCategory}>
      <input key={1} type="text" onChange={handleChange} value={input} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
