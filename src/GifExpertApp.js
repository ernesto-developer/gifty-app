import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GiftExpertapp() {
  /* const categories = ["Anime", "Suspenso", "Thriller"]; */

  const [category, setCategory] = useState(["Anime"]);

 


  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
   
      <ol>
        
            {category.map( category => {
                
                return <GifGrid 
                    key={category}
                    category={category}
                />
            })}
        
      </ol>
    </div>
  );
}

export default GiftExpertapp;
