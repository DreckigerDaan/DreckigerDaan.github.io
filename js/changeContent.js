




function showSection(sectionName) {
    // Sektionen verstecken
    document.getElementById("statistik-2019").style.display = "none";
    document.getElementById("statistik-2018").style.display = "none";
/*     document.getElementById("statistik-2017").style.display = "none";
    document.getElementById("statistik-2016").style.display = "none"; */
 


    document.getElementById(sectionName).style.display = "block";
}

/*
HTML

<div onmouseover="showSection('2020');">2020</div>

*/