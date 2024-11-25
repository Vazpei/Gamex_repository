
const btn_clear_users = document.querySelector(".btn-clear-users");
const users_email = document.querySelector("#email");
const users_name = document.querySelector("#name");
const users_phone = document.querySelector("#phone");
const users_password = document.querySelector("#password");
const users_confirm_password = document.querySelector("#confirm-password");

btn_clear_users.addEventListener("click",()=>{
    users_email.value = "";
    users_name.value = "";
    users_phone.value = "";
    users_password.value = "";
    users_confirm_password.value = "";
})