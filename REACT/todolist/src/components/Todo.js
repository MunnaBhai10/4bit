import React from 'react'
import './style.css'
const Todo = () => {
  const [inputdata, setInputData]=React.useState("");
  const [items, setItems]=React.useState([]);

// Add the items
const addItems =() =>{
    if(!inputdata){
      alert("no data to add!")
    }else{
      setItems([...items,inputdata])
    }
}

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
            <img src="" alt="todo logo" />
            <figcaption>Add your list here!</figcaption>
            </figure>
            <div className='addItems'>
                    <input type="text" placeholder='✍️ Add items' className='form-control' value={inputdata} onChange={(event)=>setInputData(event.target.value)} />
                    <i className="fa-solid fa-plus add-btn" onClick={addItems}></i>

            </div>
             {/* show our items */}
                

                  <div className='ShowItems'>

                    {items.map((curElem)=>{
                      return(
                        <div className='eachItems'>
                        <h3>{curElem}</h3>
                        <div className='todo-btn'>
                        <i className="far fa-edit add-btn"></i>
                        <i className="far fa-trash-alt add-btn"></i>
                        </div>
                    </div>
                  
                      )
                    })}
                    </div>


             {/* delete our items */}
            <div className='showItem'>
                  <button className='add btn effect04' data-sm-link-text="Remove All"><span>Check List</span></button>
                  <button className='remove btn'>Remove All</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
//2:33:00
