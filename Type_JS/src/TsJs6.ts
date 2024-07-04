/*DOM & BOM IN TYPESCRIPT*/
let h1 = document.getElementById("H1") as HTMLHeadingElement;
h1.style.color = "red";

let h2 = document.getElementsByClassName("H2")[0] as HTMLHeadingElement;
h2.style.color = "blue";
h2.style.border = "2px solid black";

let h3 = document.getElementsByTagName("h3")[0] as HTMLHeadingElement;
h3.style.fontSize = "25px";

let sbmt = document.getElementsByName("Submit")[0] as HTMLButtonElement;
sbmt.style.backgroundColor = "orange";

let pi = document.querySelector(".pi") as HTMLUListElement;
pi.style.color = "green";
pi.style.fontSize = "25px";

let i = document.querySelectorAll(".i")[2] as HTMLUListElement;
i.style.color = "brown";

//Create Element
let p = document.createElement("p") as HTMLParagraphElement;
p.textContent = "This Is Another Paragraph";
p.className = "pp";
p.style.fontSize = "30px";
p.style.color = "brown";
document.body.appendChild(p);