import{b as l,T as o}from"./getCartProductFromLs-DZ0_6J83.js";import"./commonJs-CeZzMC5a.js";const d=async t=>{try{const s=await l.post("https://ecommerce-backend-kdg6.onrender.com/auth/Registration",t);if(s.status===201)return localStorage.setItem("token",s.data.token),"login successfully"}catch(e){switch(e.status){case 400:if(e.response&&e.response.data)return e.response.data.extraDetails&&e.response.data.extraDetails[0]?e.response.data.extraDetails[0]:e.response.data.message;case 409:return e.response.data.message;default:return e.response.data.message}}},m=async t=>{const e=new FormData(t.target),s=e.get("username"),n=e.get("email"),r=e.get("password"),i=e.get("confirmPassword");//!   send data to backend
let a=await d({username:s,email:n,password:r,confirmPassword:i});//! send toast
if(o("signup",a),localStorage.getItem("token")){o("signup",a),setTimeout(()=>{window.location.href="/"},1500);const c=document.querySelector(".links-header");c.innerHTML=`
    <div className="links-header flex"> <a href="/" class='logoutBtn'>logout</a>
     </div>`}},u=document.querySelector("#signupForm");u.addEventListener("submit",t=>{t.preventDefault(),m(t)});let g=localStorage.getItem("token");g&&(window.location.href="/");
