const mobileBtn=document.getElementById("mobileBtn");
const menu=document.querySelector(".menu");
if(mobileBtn){mobileBtn.addEventListener("click",()=>menu.classList.toggle("active"));}
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("active")));
