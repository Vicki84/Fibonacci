//tal
var forste = 0; 
var anden = 1; 
var mellemregning = 0;
// array af tal
var primtal = [1, 2, 3, 5, 7, 11, 12, 13, 17, 19, 23];  
var arrayLength = 10; 
// boolean
var txtred = false;

while (mellemregning < 100){
  for(var i = 0 ; i < arrayLength; i++) {
      if(primtal[i] == mellemregning){
        //primtal i rød
        txtred = true;
      }
  }
  udskrivtekst(txtred);
  
  txtred = false; //reset farven
  // fibonagie udregningen
  mellemregning = forste+anden; 
  //flyte tal en gang til venstre 
  forste = anden;
  anden = mellemregning; 
}

function udskrivtekst(fontcolor){
  if (fontcolor == true){
    //rød tekst
    document.write('<FONT COLOR="red">' + mellemregning + '</font><br>' );
  }
  else{
    //sort tekst
    document.write(mellemregning + "<br>");
  }
}