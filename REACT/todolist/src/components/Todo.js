import React,{useEffect} from 'react'
import './style.css'

//get the local storage data
const getLocalData =()=>{
  const lists = localStorage.getItem("mytodolist")
  if(lists){
    return JSON.parse(lists)
  }else{
    return []
  }
}


const Todo = () => {
  const [inputdata, setInputData]=React.useState("");
  const [items, setItems]=React.useState(getLocalData());
  const [isEditItem,setIsEditItems]=React.useState("")
  const [toggleButton,setToggleButton]=React.useState(false)

// Add the items
const addItems =() =>{
    if(!inputdata){
      alert("no data to add!")
    }else if(inputdata && toggleButton){
      setItems(items.map((curElem)=>{
        if(curElem.id===isEditItem){
          return{...curElem,name: inputdata}
          
        }
        
        return curElem
      }))
      setInputData("")
        setIsEditItems(null)
        setToggleButton(false)
    }
    else{
      const mynewInputdata={
        id: new  Date().getTime().toString(),
        name: inputdata
      }
      setItems([...items,mynewInputdata])
      setInputData("")
    }
}
// edit the items
const editItem=(index)=>{
  const to_edit_todolist = items.find((curElem)=>{
    return curElem.id === index;
  })
  setInputData(to_edit_todolist.name)
  setIsEditItems(index)
  setToggleButton(true)
}

  //delete items
  const deleteItem = (index)=>{
    const updatedItems = items.filter((curElem)=>{
      return curElem.id !== index;
    })
    setItems(updatedItems)
  }

  //delete all
  const removeAll= ()=>{
    setItems([])
  }

  //adding local storage

  useEffect( () => {
localStorage.setItem("mytodolist", JSON.stringify(items))
  },[items])

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
            <img src="https://imgs.search.brave.com/myOxRUXXHk9VzwKMzPpPS-9zaT7P01VslEIV-Sdyoso/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzUz/Ny9QTkcvOTYvcGFw/ZXItcGVuY2lsX2lj/b24taWNvbnMuY29t/XzUyOTI4LnBuZw" alt="todo logo" />
            <figcaption>Add your list here!</figcaption>
            </figure>
            <div className='addItems'>
                    <input type="text" placeholder='✍️ Add items' className='form-control' value={inputdata} onChange={(event)=>setInputData(event.target.value)} />
                    {toggleButton?(<i className="fa-solid fa-edit add-btn" onClick={addItems}></i>):<i className="fa-solid fa-plus add-btn" onClick={addItems}></i>}
                    

            </div>
             {/* show our items */}
                

                  <div className='ShowItems'>

                    {items.map((curElem)=>{
                      return(
                        <div className='eachItems' key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                        <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                        <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                    </div>
                  
                      )
                    })}
                    </div>


             {/* delete our items */}
            <div className='showItem'>
                  <button className='add btn effect04' data-sm-link-text="Remove All"onClick={removeAll}><span>Check List</span></button>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
//2:33:00
