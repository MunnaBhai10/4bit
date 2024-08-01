import PropTypes from 'prop-types'
function Fruits(prop){
    const category = prop.category;
    const itemList = prop.items;

    // list.sort((a,b)=> a.name.localeCompare(b.name))
    // const LowCalFruits = list.filter(fruits => fruits.calories > 100 )
const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b></li>);
return(<>
<h3 className="category">{category}</h3>
<ol className="list">{listItems}</ol>
</>)
}
Fruits.defaultProps={
            category: "Category",
            items: []
}   
Fruits.prototype ={
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                             calories: PropTypes.number

    }))

}

export default Fruits
