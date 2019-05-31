//Openklappen kiesEenPark
let kiesEenPark = document.getElementById('kiesEenPark');
let planning3 = document.getElementById('planning3');
let kiesEenParkduw = 0;

kiesEenPark.addEventListener("click", function() { 
    kiesEenParkduw++;
    console.log(kiesEenParkduw);

    if(kiesEenParkduw%2==0) 
    {
        planning3.style.display = "none";
        kiesEenPark.style.backgroundColor = "var(--c-pirate-lichtbruin)";
    } else {
        planning3.style.display = "flex";
        kiesEenPark.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});

//stadselectie Gent
let gent = document.getElementById('gent');
let belgieGent = document.getElementById('belgieGent');
let gentDuw = 0;

gent.addEventListener("click", function() { 
    gentDuw++;
    console.log(gentDuw);

    if(gentDuw%2==0) 
    {
        gent.style.backgroundColor = "var(--c-pirate-donkerbruin)";
        gent.style.padding= "3px";
        belgieGent.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        
    } else {
        gent.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        belgieGent.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});


//stadselectie Brussel
let brussel = document.getElementById('brussel');
let belgieBrussel = document.getElementById('belgieBrussel');
let brusselDuw = 0;

brussel.addEventListener("click", function() { 
    brusselDuw++;
    console.log(brusselDuw);

    if(brusselDuw%2==0) 
    {
        brussel.style.backgroundColor = "var(--c-pirate-donkerbruin)";
        brussel.style.padding= "3px";
        belgieBrussel.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        
    } else {
        brussel.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        belgieBrussel.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});

//stadselectie Leuven
let leuven = document.getElementById('leuven');
let belgieLeuven = document.getElementById('belgieLeuven');
let leuvenDuw = 0;

leuven.addEventListener("click", function() { 
    leuvenDuw++;
    console.log(leuvenDuw);

    if(leuvenDuw%2==0) 
    {
        leuven.style.backgroundColor = "var(--c-pirate-donkerbruin)";
        leuven.style.padding= "3px";
        belgieLeuven.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        
    } else {
        leuven.style.backgroundColor = "var(--c-pirate-lichtbruin)";
        belgieLeuven.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});

//Openklappen datum
let datum = document.getElementById('datum');
let planning4 = document.getElementById('planning4');
let datumduw = 0;

datum.addEventListener("click", function() { 
    datumduw++;
    console.log(datumduw);

    if(datumduw%2==0) 
    {
        planning4.style.display = "none";
        datum.style.backgroundColor = "var(--c-pirate-lichtbruin)";
    } else {
        planning4.style.display = "flex";
        datum.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});

//Openklappen personen
let personen = document.getElementById('personen');
let planning5 = document.getElementById('planning5');
let personenduw = 0;

personen.addEventListener("click", function() { 
    personenduw++;
    console.log(personenduw);

    if(personenduw%2==0) 
    {
        planning5.style.display = "none";
        personen.style.backgroundColor = "var(--c-pirate-lichtbruin)";
    } else {
        planning5.style.display = "flex";
        personen.style.backgroundColor = "var(--c-pirate-donkerbruin)";
    }
});

//optellingen 1
let minteken1 = document.getElementById('minteken1');
let cijfer1 = document.getElementById('cijfer1').innerHTML;
let plusteken1 = document.getElementById('plusteken1');

minteken1.addEventListener("click", function(){
    if (cijfer1>0) {
        cijfer1 --;
        document.getElementById('cijfer1').innerHTML = cijfer1;
        console.log(cijfer1);
    } else {
        alert("Je kan niet onder 0 gaan");
    }
});

plusteken1.addEventListener("click", function(){
        cijfer1 ++;
        document.getElementById('cijfer1').innerHTML = cijfer1;
        console.log(cijfer1);
});

//optellingen 2
let minteken2 = document.getElementById('minteken2');
let cijfer2 = document.getElementById('cijfer2').innerHTML;
let plusteken2 = document.getElementById('plusteken2');

minteken2.addEventListener("click", function(){
    if (cijfer2>0) {
        cijfer2 --;
        document.getElementById('cijfer2').innerHTML = cijfer2;
        console.log(cijfer2);
    } else {
        alert("Je kan niet onder 0 gaan");
    }
});

plusteken2.addEventListener("click", function(){
        cijfer2 ++;
        document.getElementById('cijfer2').innerHTML = cijfer2;
        console.log(cijfer2);
});

//optellingen 3
let minteken3 = document.getElementById('minteken3');
let cijfer3 = document.getElementById('cijfer3').innerHTML;
let plusteken3 = document.getElementById('plusteken3');

minteken3.addEventListener("click", function(){
    if (cijfer3>0) {
        cijfer3 --;
        document.getElementById('cijfer3').innerHTML = cijfer3;
        console.log(cijfer3);
    } else {
        alert("Je kan niet onder 0 gaan");
    }
});

plusteken3.addEventListener("click", function(){
        cijfer3 ++;
        document.getElementById('cijfer3').innerHTML = cijfer3;
        console.log(cijfer3);
});

//menu mobiel
let menu = document.getElementById('menu');
let openklap = document.getElementById('openklap');
let kruisje = document.getElementById('kruisje');

menu.addEventListener("click", function(){
    openklap.style.display = "block";
});

kruisje.addEventListener("click", function(){
    openklap.style.display = "none";
});

//vakantieparken

let vakantieparken = document.getElementById('vakantieparken');
let donkerbruin = document.getElementById('donkerbruin');
let vakantieparkDuw = 0;

vakantieparken.addEventListener("click", function(){
    vakantieparkDuw++;
    if(vakantieparkDuw%2==0)
    {
        donkerbruin.style.display = "none";
    } else {
        donkerbruin.style.display = "block";
    }
});