var oldalSzam = document.getElementById("oldal")
var alfaSzam = document.getElementById("oldal")
var szamitGomb = document.getElementById("szamitGomb")
var eredmenyIn = document.getElementById("Eredmény")

szamitGomb.addEventListener("click", function(){
    let oldalSzam = oldalSzam.value
    let alfaSzam = alfaSzam.value
    let sugar = 1/2*oldal*Math.sin(alfa);
    console.log(sugar.toLocaleString());
    eredmenyIn.value = (sugar.toLocaleString());
});