import{b as c,T as s}from"./getCartProductFromLs-DZ0_6J83.js";import"./commonJs-CeZzMC5a.js";const i=async t=>{try{const o=await c.post("https://ecommerce-backend-kdg6.onrender.com/auth/Login",t);if(o.status===200)return localStorage.setItem("token",o.data.token),console.log(o.data.message),o.data.message}catch(e){switch(e.status){case 404:return e.response.data.message;case 401:return e.response.data.message;case 400:return e.response.data.extraDetails[0];default:return e}}},l=async t=>{const e=new FormData(t.target),o=e.get("email"),n=e.get("password");let a=await i({email:o,password:n});if(s("login",a),localStorage.getItem("token")){s("login",a),setTimeout(()=>{window.location.href="/"},1500);const r=document.querySelector(".links-header");r.innerHTML=`
  <div className="links-header flex"> <a href="/" class='logoutBtn'>logout</a>
   </div>`}},m=document.querySelector("#loginForm");m.addEventListener("submit",t=>{t.preventDefault(),l(t)});let d=localStorage.getItem("token");d&&(window.location.href="/");
