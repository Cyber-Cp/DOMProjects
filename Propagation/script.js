document.getElementById('div1').addEventListener('click',(e
)=>{
    alert("Div1");
    e.stopPropagation();
},true);
document.getElementById('div2').addEventListener('click',()=>{
    alert('Div2')
},true);
document.getElementById('div3').addEventListener('click',()=>{
    alert("Div3")
},true);
document.getElementById('div4').addEventListener('click',() =>{
    alert("Div4")
},true)
document.getElementById('div5').addEventListener('click',()=>{
    alert('Div 5')
},true)