import React, { useState } from "react";

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();

    if(inputValue.trim().length<=1) return;

    console.log(inputValue);
    setCategories( categories => [inputValue,...categories]);
   setInputValue('');

  }
  return (
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
