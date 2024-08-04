import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //api.giphy.com/v1/gifs/search?api_key=5pwITTUcJ4G8bNS1RRpta1eqVganEH2N&q=pascual
  //console.log(categories);

  const onAddCategory = () => {
    // e.preventDefault();

    setCategories(["Sailor moon", ...categories]);
    //setCategories(cat => [...cat, 'sailor moon'])
  };
  return (
    <>
      <h1>GifExpertApp</h1>
    

      <AddCategory setCategories={setCategories} />
     
     
        {categories.map((category) => 
         (
           <GifGrid key={category} category={category}/>
          )
        )}
     
    </>
  );
};
