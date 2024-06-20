//clone Element
let cln_ul1 = document.getElementById("cln");
let cln_ul2 = cln_ul1.cloneNode(true);
cln_ul2.id="cln1";
document.body.appendChild(cln_ul2);

//Replace Element
let mnu = document.getElementById("mnu");
let mnul = document.createElement("li");
mnul.textContent = "ABCD";
let pos1 = mnu.firstElementChild;
mnu.replaceChild(mnul,pos1);

//Insert Adjacent Element
let ia1 = document.getElementById("ia");
let html1 = `<h1>Before-Begin Insert Adjacent</h1>`;
ia1.insertAdjacentHTML('beforebegin',html1);
/*using InsertAdjacent we can add an element in 
Before Begin of element
After Begin of element
Before End of element
After End of element
*/

//Change Attribute & InlineStyle
let btn1 = document.getElementById("btn1");
btn1.setAttribute("name","Btn1");
btn1.style.cssText = "background-color: blue; color:white;";

//DOM Events
let btn2 = document.getElementById("btn2").addEventListener("click",()=>{
    alert("Click Here Clicked!");
});

//Remove EventListener
function funcc1 () {
    alert("Secind click");
}
let btn3 = document.getElementById("btn2");
btn3.addEventListener('click',funcc1);
btn3.removeEventListener('click',funcc1);

//Change CSS Class & Width & Height Of Element Through JS
let divb = document.getElementById("box");
divb.className += " bg1";
divb.style.border = "1px solid red";
divb.style.width = "400px";
divb.style.height = "100px"

//DOMContentLoaded & load Event
window.addEventListener('DOMContentLoaded',()=>{
    alert("Page load1");
});
window.addEventListener('load',()=>{
    alert("Page Load2");
})