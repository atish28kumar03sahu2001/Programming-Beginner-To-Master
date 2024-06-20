let div1 = document.getElementById("d1");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.backgroundColor = "orange";

let p = document.getElementsByClassName("p");
for(let i = 0; i < p.length; i++){
    p[i].style.color="blue";
    p[i].style.margin = "20px";
}

let p1 = document.getElementsByTagName("p");
for(let i = 0; i < p1.length; i++){
    p1[i].style.backgroundColor = "yellow";
}

let sbmt = document.getElementsByName("submt")[0].addEventListener("click",(e)=>{
    e.preventDefault();
    let ip1 = document.getElementsByName("ip1")[0].value;
    console.log(ip1);
});

let UL1 = document.querySelector('.UL1');
UL1.style.backgroundColor = "green";

let LI1 = document.querySelectorAll(".L1");
for(let i = 0; i < LI1.length; i++){
    LI1[i].style.color = "white";
}