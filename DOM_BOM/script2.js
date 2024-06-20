//Traverse Element
let ul2 = document.getElementById("tra1");
let li2 = ul2.getElementsByTagName("li");
for(let i = 0; i < li2.length; i++){
    li2[i].textContent = "Element" + i;
}
//inner HTML
let div3 = document.getElementById("intro");
div3.innerHTML=`<h1>This Is Heading1</h1>`;

//Create & Append Child
let div4 = document.createElement("ul");
let h2 = document.createElement("h2");
h2.innerHTML = `This Is Heading2`;
div4.appendChild(h2);
document.body.appendChild(div4);

//Insert Before
let ul3 = document.getElementById("IB");
let li1 = document.createElement("li");
li1.textContent = `insert Before list`;
let pos = ul3.firstElementChild;
ul3.insertBefore(li1, pos);

//Remove Element
let ul4 = document.getElementById("menu");
let li3 = ul4.getElementsByTagName("li");
for(let i = 0; i < li3.length; i++){
    if(i === 2){
        ul4.removeChild(li3[i]);
    }
}