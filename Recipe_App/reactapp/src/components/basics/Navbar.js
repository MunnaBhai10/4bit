import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className="navbar">
        {
            menuList.map((elem)=>{
                return(<button className="nav-button" onClick={()=>filterItem(elem)}>{elem}</button>)
            })
        }
       
    </nav>
    </>
  )
}

export default Navbar
