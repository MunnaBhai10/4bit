const liItem=document.querySelectorAll('ul li');
console.log(liItem);
const imgItem= document.querySelectorAll('.product > .card')
console.log(imgItem);


liItem.forEach(li => {
    li.onclick= function() {
        //active
        liItem.forEach(li=>{
            li.className=""
        })
        li.className="active"
    

    //filter
    const value = li.textContent;
    console.log(value);
    imgItem.forEach(img => {
        
        if ( img.getAttribute('data-filter')=== value.toLowerCase()|| value=="All") {
            img.style.display='block' 
        }else{
            img.style.display="none";
        }
    })
}
});