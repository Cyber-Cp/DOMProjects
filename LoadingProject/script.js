let progress=0;
const progressBar=document.getElementById('prograssBar');
const progressText=document.getElementById('progressText');
const loadingScreen=document.getElementById('loadingScreen');
const welcomePage=document.getElementById('welcomePage');
//Collect all Elements 


//Interval and rpeat
const interval=setInterval(()=>{
    if(progress>100){
        clearInterval(interval);
        loadingScreen.style.display='none';
        welcomePage.style.display='block';
    }else {
        progress++;
        progressText.style.width=progress+'%';
        progressText.textContent=progress+'%';
    }
},100);
