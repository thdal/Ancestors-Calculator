console.log("ancetres.js")

var generationDuration = 25;
var generationNumber = 20;
var individu = 1;

for(var i = 0 ; i < generationNumber; i++){
    individu = (individu) * 2;
    //console.log(individu);

}


console.log(individu);
console.log("Pour "+generationNumber+" générations équivalent à " + generationDuration + "ans, alors en " + generationNumber*generationDuration + " ans" +
    " un individu, aujourd'hui, posséderait THEORIQUEMENT " + individu + " ancetres");



