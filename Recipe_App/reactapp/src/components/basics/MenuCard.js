import React from 'react'

function MenuCard({menuData}) {
  
  return (
    <><div className='card-container'>
        {menuData.map((element)=>{
          return(
        
          <div className="card">
            <img src={element.img} alt="Product Image" className="card-img"/>
            <div className="card-content">
                <h2 className="card-title">{element.name}</h2>
                <p>Category: {element.category}</p>
                <p className="card-description">{element.description}</p>
                <p className="card-price">{element.price}</p>
            </div>
        </div>
        
        
      )
        })}</div>
        
       
    </>
  )
}

export default MenuCard
