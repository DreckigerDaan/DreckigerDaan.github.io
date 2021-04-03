var isClicked = true;

function move() {

   
    if(isClicked){
        document.getElementById("chart-wrapper").style.cssText = "left: 50px; top: 230px";
        document.getElementById("chart-wrapper2").style.cssText = "left: 400px; top: 230px";
        document.getElementById("chart-wrapper3").style.cssText = "left: 750px; top: 280px";
        document.getElementById("chart-wrapper4").style.cssText = "left: 1000px; top: 310px";
        document.getElementById("chart-wrapper5").style.cssText = "left: 1200px; top: 330px";
        isClicked = false;
    } else {

        document.getElementById("chart-wrapper").style.cssText = "left: 950px; top: 100px";
        document.getElementById("chart-wrapper2").style.cssText = "left: 200px; top: 250x";
        document.getElementById("chart-wrapper3").style.cssText = "left: 750px; top: 400px";
        document.getElementById("chart-wrapper4").style.cssText = "left: 1100px; top: 450px";
        document.getElementById("chart-wrapper5").style.cssText = "left: 600px; top: 100px"; 
        isClicked = true;
        

    }
        
    
    


}

function move2(){

    if(isClicked){
        document.getElementById("aachart-wrapper").style.cssText = "left: 50px; top: 230px";
        document.getElementById("aachart-wrapper2").style.cssText = "left: 400px; top: 230px";
        document.getElementById("aachart-wrapper3").style.cssText = "left: 750px; top: 280px";
        document.getElementById("aachart-wrapper4").style.cssText = "left: 1000px; top: 310px";
        document.getElementById("aachart-wrapper5").style.cssText = "left: 1200px; top: 330px";
        isClicked = false;
    } else {

        document.getElementById("aachart-wrapper").style.cssText = "left: 600px; top: 250px";
        document.getElementById("aachart-wrapper2").style.cssText = "left: 1000px; top: 120x";
        document.getElementById("aachart-wrapper3").style.cssText = "left: 250px; top: 400px";
        document.getElementById("aachart-wrapper4").style.cssText = "left: 300px; top: 100px";
        document.getElementById("aachart-wrapper5").style.cssText = "left: 1200px; top: 500px"; 
        isClicked = true;
        

    }

}