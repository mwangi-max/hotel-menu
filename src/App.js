import React from 'react';
import {useState} from 'react';
import Category from './Category';
import Menu from './Menu';
import data from './data';

const allCategories =['all', ...new Set(data.map((item)=>item.category))];


const App = () => {
  const [menuItems,setMenuItems]= useState(data);
  const [categories,setCategories] = useState(allCategories);

  const filterCategories = (category)=>{
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    let newItems = data.filter((item)=>{
      return item.category === category;
    })
    setMenuItems(newItems);
  }
  return (
    <>
    <Category filterCategories={filterCategories} categories={categories}/>
    <Menu items={menuItems}/>
   </>
  )
}

export default App
