import './App.css';

import Header from './Components/Header/Header';
import Categories from './Components/Main/Categories';
import CategoryItem from './Components/Main/CategoryItem';
import Data from "./Data/data"

import React, { useState } from 'react';


const project_name = "Tourist Guide"
const project_description = "İstediğiniz yerlerdeki turistik yerleri keşfedebilirsiniz. byCikencey"

const allCategories = ["all", ... new Set(Data.map((dataOne) => dataOne.category))]


function App() {

  console.log(allCategories) //Tüm Kategoriler.

  const [categories, setCategories] = useState(allCategories)
  const [activeCategory, setActiveCategory] = useState("")
  const [activeCategoryItem, setActiveCategoryItem] = useState(Data)


  const filterItems = (category) => {
    console.log("Tıklandı..")
    setActiveCategory(category)
    if (category === "all") {
      setActiveCategoryItem(Data)
      return
    }
    const newItems = Data.filter((dataOne) => dataOne.category === category)
    setActiveCategoryItem(newItems)
  }






  return (
    <div className="App">

      <Header
        title={project_name}
        description={project_description}
      />

      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />

      <CategoryItem
        data={activeCategoryItem}
      />



    </div>
  );
}

export default App;