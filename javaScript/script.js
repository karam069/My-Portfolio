$(document).ready(function () { 
    $(".toggle-button").click(function(){
        $(".links").toggleClass("active")
    })
 });

 $(document).ready(function(){

    let Jobname = "Front-End Developer";

    let index = 0;

    function TypeWriter() { 
     
     index++;
 
     $("#front-end").text(Jobname.slice(0, index))
 
     index > Jobname.length ? index = 0 : index = index;
   
     }
 
     setInterval(function () {  
         TypeWriter();
     }, 200);
 });

 $(document).ready(function(){

     const hidden = document.querySelectorAll(".hidden");

     const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            } else{
                entry.target.classList.remove("show")
            }
         })
     });

     hidden.forEach((el) => observer.observe(el));
 });
//  while(10 < 10){
//     console.log("hello world");
//  }
//  wheile = 10;

//  if(wheile < 10){
//     console.log("hello bye");
//  } else{
//     console.log("but");
//  }

//  var s = 10;
// for(let i = 0; i < s; i++){
//     console.log(s[i])
// }