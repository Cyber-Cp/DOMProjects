const timer=document.getElementById('result');
 count =0;
setInterval(function(){
    count++;
    timer.textContent=count;
},5000)