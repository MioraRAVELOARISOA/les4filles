
var namevalue;

niveaux=1;//
niveaux=2;//
niveaux=3;//
 
 max = 25;
function randomize(){
  return Math.floor(Math.random()*25+1);
}

randval=25;
randval=randomize();


 ici=document.getElementById('ici');
 en=document.getElementById('en');
resultat = document.getElementById('resultat');

//list1 =
en.onclick=function(){
  alert(randval);
  var  tmp=ici.value;
  ici.value='';

  
   if(tmp>randval){
      
      resultat.innerHTML=resultat.innerHTML+'<br>'+ tmp  + '<b> chiffre trop grand </b>' ;
  }

  else if (tmp<randval){ 
      
      resultat.innerHTML= resultat.innerHTML+'<br>'+tmp + ' <b>trop petit </b>';
  }
  else{
      resultat.innerHTML=   tmp + '<b> FELICITATION </b>';
  }};

/*modal*/

function cal() {
var pl=document.form1.places.value;
var tf=document.form1.tarifs.value;
var resultat=pl*tf;
document.form1.tresultat.value=resultat;
}
function cal2() {
var pl2=document.form2.places2.value;
var tf2=document.form2.tarifs2.value;
var resultat2=pl2*tf2;
document.form2.tresultat2.value=resultat2;
}
function calfin() {
var r1=resultat;
var r2=resultat2;
var resultatfin=r1+r2;
document.formfin.tresultatfin.value=resultatfin;
}


function fct1(){
  document.screen.screenContent.value += "1"
};
function fct2(){
  document.screen.screenContent.value += "2"
};
function fct3(){
  document.screen.screenContent.value += "3"
};
function fct4(){
  document.screen.screenContent.value += "4"
};
function fct5(){
  document.screen.screenContent.value += "5"
};

function fct6(){
  document.screen.screenContent.value += "6"
};

function fct7(){
  document.screen.screenContent.value += "7"
};

function fct8(){
  document.screen.screenContent.value += "8"
};

function fct9(){
document.screen.screenContent.value += "9"
};

function fct0(){
  document.screen.screenContent.value += "0"
};
function fctPlus(){
  document.screen.screenContent.value += "+"
};
function fctMoins(){
  document.screen.screenContent.value += "-"
};
function fctDivision(){
  document.screen.screenContent.value += "/"
};
function fctFois(){
  document.screen.screenContent.value += "*"
};
function fctClear(){

  document.screen.screenContent.value = ""
};

/*modal*/
function fctEgal() {
  var equals = eval(document.screen.screenContent.value)
  document.screen.screenContent.value = equals;
}

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});
/*calendrier*/

function calendar() {

  var monthNames= ['Jan','Fev','Mar','Avr','Mai','Jui','Juil','Aou','Sep','Oct','Nov','Dec'];
  var jours= ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  var monthDays= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var today= new Date();
  var thisDay= today.getDate();
  var year= today.getYear();
  year <= 200 ? year += 1900 : null;

  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    monthDays[1] = 29;
  }
  var nDays= monthDays[today.getMonth()];
  var firstDay= today;
  firstDay.setDate(0);

  firstDay.getDate() == 2 ? firstDay.setDate(0) : null;
  
  var startDay = firstDay.getDay();
  
  var tb= document.createElement('table');
  
  var tbr= tb.insertRow(-1);

  var tbh= document.createElement("th");
  tbh.setAttribute('colspan','7');
  var tbhtxt= document.createTextNode(monthNames[today.getMonth()+1]+'.'+year);
  tbh.appendChild(tbhtxt);

  tbr.appendChild(tbh);

  var tbr=tb.insertRow(-1);

  for(var i=0 ;i<jours.length ; i++){

    tbr.insertCell(-1).appendChild(document.createTextNode(jours[i]));
  }

  var tbr= document.createElement("tr");

  var column= 0;

  for (var i= 0; i < startDay; i++) {
    tbr.insertCell(0);
    column++;
  }

  for (var i = 1; i <= nDays; i++) {
  
    var tdd= tbr.insertCell(-1);

    i == thisDay ? tdd.style.color="#FF0000" : null;

    tdd.appendChild(document.createTextNode(i));

    column++;
    if (column == 7) {
      tb.appendChild(tbr);
      var tbr=document.createElement("tr");
      column = 0;
    }

    i == nDays ? tb.appendChild(tbr) : null;

  }
  document.getElementById('contcalendar').appendChild(tb);
}

typeof window.addEventListener == 'undefined' ? window.attachEvent("onload",calendar) : addEventListener('load',calendar,false);