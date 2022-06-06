let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

const fetchData=()=>{
    console.log("GET")
    fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data
      .map((food) => {
        return `
        <div class="box">
        <div class="box-img">
            <img src="${food.imageUrl}" alt="picture">
        </div>
        <h2>${food.name}</h2>
        <h3>${food.price} KM</h3>
        <span>${food.id}</span>
        <i class="bx bx-cart-alt"></i>
    </div>
            `;
      })
      .join("");
     document.querySelector(".menu-container").insertAdjacentHTML("afterbegin", html);
  });
}
fetchData()

let idInput=document.querySelector("#id")
let nameInput=document.querySelector("#name")
let priceInput=document.querySelector("#price")
let imageInput=document.querySelector("#image")

const postMethod=()=>{
    console.log("POST")
    fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food",{
        method:"POST",
        headers: new Headers({ "content-type": "application/json" }),
        body:JSON.stringify({
            id: idInput.value,
            name: nameInput.value,
            price: priceInput.value,
            imageUrl: imageInput.value,
        })
    })
    .then((res) => console.log(res))
}
let postForm=document.querySelector(".form")

postForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    postMethod()
})

let idInputPUT=document.querySelector("#id-update")
let nameInputPUT=document.querySelector("#name-update")
let priceInputPUT=document.querySelector("#price-update")
let imageInputPUT=document.querySelector("#image-update")


const putMethod=()=>{
    console.log("PUT")
    fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food",{
        method:"PUT",
        headers: new Headers({ "content-type": "application/json" }),
        body:JSON.stringify({
            id: idInputPUT.value,
            name: nameInputPUT.value,
            price: priceInputPUT.value,
            imageUrl: imageInputPUT.value,
        })
    })
    .then((res) => console.log(res))
}
let putForm=document.querySelector(".putForm")
putForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    putMethod()
})
const deleteMethod=(id)=>{
    console.log("DELETE")
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`,{
        method:"DELETE",
        
    })
    .then((res) => console.log(res))
}
let idDeleteInput=document.querySelector("#id-delete")
let deleteForm=document.querySelector(".deleteForm")
deleteForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    deleteMethod(Number(idDeleteInput.value))
})