/// BTN 1
document.querySelector("#btn1").addEventListener("click", function(){
//show 1
document.querySelector(".contentDiv .btn1").style.display = "block"

//active 1 
this.classList.replace("button","active");

//remove 2 n 3
document.querySelector(".btnDiv #btn2").classList.replace("active","button");
document.querySelector(".btnDiv #btn3").classList.replace("active","button");

// hide 2 n 3
document.querySelector(".contentDiv .btn2").style.display = "none"
document.querySelector(".contentDiv .btn3").style.display = "none"
})

//BTN 2
document.querySelector("#btn2").addEventListener("click", function(){
//show 2
document.querySelector(".contentDiv .btn2").style.display = "block"
//active 2 
this.classList.replace("button","active");

//remove 1 n 3
document.querySelector(".btnDiv #btn1").classList.replace("active","button");
document.querySelector(".btnDiv #btn3").classList.replace("active","button");

// hide 1 n 3
document.querySelector(".contentDiv .btn1").style.display = "none" 
document.querySelector(".contentDiv .btn3").style.display = "none"

})

/// BTN 3
document.querySelector("#btn3").addEventListener("click", function(){
//show 3
document.querySelector(".contentDiv .btn3").style.display = "block"

//active 3 
this.classList.replace("button","active");

//remove 1 n 2
document.querySelector(".btnDiv #btn1").classList.replace("active","button");
document.querySelector(".btnDiv #btn2").classList.replace("active","button");

//hide 1 n 2
document.querySelector(".contentDiv .btn1").style.display = "none"
document.querySelector(".contentDiv .btn2").style.display = "none"

})