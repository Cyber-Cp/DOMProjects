document.getElementById('div1').addEventListener('click',()=>{
    alert("Div1");
});
document.getElementById('div2').addEventListener('click',()=>{
    alert('Div2')
});
document.getElementById('div3').addEventListener('click',()=>{
    alert("Div3")
});
document.getElementById('div4').addEventListener('click',() =>{
    alert("Div4")
})
document.getElementById('div5').addEventListener('click',(e)=>{
    alert('Div 5');
    e.stopPropagation();
})
setTimeout(function(){
    alert("tkktjgmf fnakljak");
},3000)
setInterval(function(){
    console.log("Repeat")
},5000);
