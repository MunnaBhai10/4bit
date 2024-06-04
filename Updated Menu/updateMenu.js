let foods= [
    {
     title: "Omlete",
     Category: "BreakFast",
     filter: "breakfast",
     price: "RS.50",
     img:"https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        title: "Roti",
        Category: "Dinner",
        filter: "dinner",
        price: "RS.50",
        img:"https://imgs.search.brave.com/eEtKNW2E_gODd69lS9xW_LEhjBS3mYvQ0kktaM9mNs0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MjExMzQ4Ni9waG90/by9oaWdoLWFuZ2xl/LXZpZXctdGFuZG9v/cmktcm90aS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Smpv/N0JjYUcyWUtTd0NZ/bWJVc3lIeVBlNElG/SEdQNmN3UHczcjBy/VldQOD0",
   
       },
       {
        title: "Tea",
        Category: "Drinks",
        filter: "drinks",
        price: "RS.50",
        img:"https://imgs.search.brave.com/ERVrVOyBFtVS3zj2EcFUR9UdWJBWxa4akIQTy3svnVs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/NDg1OTM5Mi9waG90/by90ZWEtc2VydmVk/LWluLWEtdHJhZGl0/aW9uYWwtbXVkLWN1/cC1pbi1pbmRpYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dk9HTUdoTVgyMEhT/V2ZHaG1hTVc2V3U1/b2dCc3BrUUpxM1k2/Y3M0ZnUzQT0",
   
       },
       {
        title: "Coffee",
        Category: "BreakFast",
        filter: "breakfast",
        price: "RS.50",
        img:"https://imgs.search.brave.com/y-ICvb0lIEwrLdSvmQZboFoN0J-2zs8yizBFz7X6qJQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDY3/MTQ4MTUzL3Bob3Rv/L2N1cC1vZi1jb2Zm/ZWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXMxUXVDMnp3/Y3NGQ2FsZVBuTlVr/RnUyaHBJZ2JiZW9N/bXk4MVhGQXRXMUE9",
   
       },
       {
        title: "Sprite",
        Category: "Drinks",
        filter: "drinks",
        price: "RS.50",
        img:"https://imgs.search.brave.com/4JNInuwqi8_IMxBwFPwEBBs478X_wPgso4S-RxmaxAQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU4/NjMzNDYzL3Bob3Rv/L3Nwcml0ZS1jYW4t/b24taWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1xR0NF/Nm92TWZVYzNhWm1x/bzd1QmZEX0lYSmtr/YVkzcUVrVVNMM3dX/Rk1zPQ",
   
       }
];

let FoodContainer = document.getElementById("product")


foods.forEach((item, index) => {
    let card = `<div class="card" data-filter=${item.filter} style="width: 18rem;">
    <img src= "${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">Category: ${item.Category}</p>
      <p class="card-text">${item.price}</p>
      <a href="#" class="btn btn-primary">Place an order</a>
    </div>
  </div>`;
FoodContainer.innerHTML += card;
})


const liItem = document.querySelectorAll('ul li');
console.log(liItem);
const imgItem = document.querySelectorAll('.product > .card')
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
        
        if ( img.getAttribute('data-filter')  ===  value.toLowerCase()|| value=="All") {
            img.style.display='block' 
        }
        else{
            img.style.display="none";
        }
    })
}
});


