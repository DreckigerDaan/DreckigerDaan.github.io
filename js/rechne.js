var time = document.getElementById("kreiskreis");


console.log("suhdiuhdi")



time.addEventListener("animationstart", function(){
    console.log("hallohallo")
    /* var time = document.getElementById("kreiskreis");
    time.addEventListener("animationiteration", myRepeatFunction); */
});


function myRepeatFunction(){
    var time = document.getElementById("kreiskreis");
    
    console.log(getComputedStyle(time))

}