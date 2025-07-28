const urlj=document.getElementById('url');//Dont take direct 
const titlej=document.getElementById('title');//Values here
const resultj=document.getElementById('result');
//Add The New Reaserch and reset Buttonns and Search Input
const searchj=document.getElementById('searchinput');
const searchbtnj=document.getElementById('searchbtn');
const reset=document.getElementById('resetbtn');

//Create one Array externally
const moviesArray=[];

document.getElementById('btn').addEventListener('click',()=>{
    const div1=document.createElement('div');
    const imgj=document.createElement("img");
    imgj.src=urlj.value;
    const h3j=document.createElement('h3');
    h3j.textContent=titlej.value;
    div1.append(imgj,h3j);
   resultj.appendChild(div1);
   // Upto now we generate imges with titles

   //Store in array
   const movie={
    url:urlj.value,
    title:titlej.value
   };
   moviesArray.push(movie);
   console.log("Array",moviesArray);
   //Clear Inputs..
   urlj.value='';
   titlej.value='';
});
//Function to Filter and display movies
// function searchMovies(){
//     const searchTerm=searchj.value.toLowerCase();
//     //Hide all cards First
//     document.querySelectorAll('.movie').
// }
