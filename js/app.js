const b = document.querySelector('button.alternativa2')
b.addEventListener("mouseover", onclick)
function onclick(){
    const i=Math.floor(Math.random()*150)+2;
    const j=Math.floor(Math.random()*150)+2;
    b.style.left=i+"px"
    b.style.top=j+"px"
}
