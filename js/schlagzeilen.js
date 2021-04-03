var alleSchlagzeilen = ["141.792 mal geschah häusliche Gewalt im Jahr 2019 - Die Dunkelziffer ist deutlich höher", "Das Unsichtbare sichtbar machen", 
"Jeden 3.Tag stirbt ein Mensch an den Folgen häuslicher Gewalt" , "81% der Opfer von häuslicher Gewalt sind weiblich" , "Pandemie - Gewalt war schon vorher da und ist durch den Lockdown eskaliert" ]

let schlagzeileDisplay = document.getElementById('schlagzeile');
var zaehler = 0;
var changeSchlagzeile = setInterval(function(){

    schlagzeileDisplay.innerHTML = alleSchlagzeilen[zaehler];
    
    if (zaehler == (alleSchlagzeilen.length -1)){
        zaehler = 0;
    }else {
        zaehler += 1;
    }


}, 5000)