import React, { useState } from 'react'
import Menu from './menuAPI'
import MenuCard from './MenuCard'
import './style.css'
const Resturant = () => {
    const [menuData, setMenuData]=useState(Menu);
    
  return (
    <>
       <MenuCard menuData={menuData} />
       
      
    </>
  )
}

export default Resturant
