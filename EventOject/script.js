document.getElementById('container').addEventListener('click',function(event){
    alert("You clicked"+event.target.tagName)
    alert("Current Target"+event.currentTarget.tagName)
})