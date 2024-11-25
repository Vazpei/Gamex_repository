const btnContact = document.querySelector(".c-send");
const comboCountry = document.querySelector("#select-country")
console.log(comboCountry);

btnContact.addEventListener("click",()=>{
    alert(`Tu pais es ${comboCountry.value}`)
})