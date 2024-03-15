$(document).ready(function () { 
    $(".toggle-button").click(function(){
        $(".links").toggleClass("active")
    })
 });

 $(document).ready(function(){
    // $("#front-end")

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
 })