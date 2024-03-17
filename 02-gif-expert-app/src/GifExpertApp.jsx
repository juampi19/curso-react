import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['dragon ball']);

  const onNewCategory = ( newCategory ) => {

    const formatValuer = newCategory.toLowerCase()

    if(categories.includes(formatValuer)) return

    // setCategories( cat => [...cat, 'The Elder Scroll'] )
    setCategories( [ formatValuer, ...categories ] )
  }

  return (
    <>
      
      <h1>GifExpertApp</h1>
    
      <AddCategory 
        onNewCategory={onNewCategory}
      />

     
      { categories.map( category => (
        <GifGrid 
          key={category}
          category={category}
        />
      ) ) }
      
        
    </>
  )
}
