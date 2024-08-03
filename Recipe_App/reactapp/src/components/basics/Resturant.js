import React, { useState } from 'react'
import Menu from './menuAPI'
import MenuCard from './MenuCard'
import './style.css'
import Navbar from './Navbar'

const uniqueList =[...new Set( Menu.map((elem)=>{
  return elem.category
})
),
"All"
];
// console.log(uniqueList);
const Resturant = () => {
    const [menuData, setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);
    const filterItem = (category)=>{
      if(category==="All"){
        setMenuData(Menu);
        return
      }

      const updatedList = Menu.filter((elem)=>{
          return elem.category===category;

      });
setMenuData(updatedList)
      

    }
    
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>


       <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant
