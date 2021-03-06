// Oefeningen week 1


// Schrijf een functie 'multiply()'
// 2 parameters (number,number)
// output: De vermenigvuldiging van de twee getallen die als input gegeven werden.
function multiply(number, number2){
    return number * number2;
}


// Schrijf een functie 'difference()'
// 1 parameter
// output: Het verschil tussen het ingegeven getal en het getal 100.
function difference(number){
    return 100 - number;
}


// Schrijf een functie 'isFifty()'
// 2 parameters
// output: Geeft TRUE terug als één van de getallen '50' is OF de som van de 2 getallen '50' is.
function isFifty(number, number2){
    return number === 50 || number2 === 50 || number + number2 === 50;
}


// Schrijf een functie 'startsWithHello()'
// 1 parameter
// output: Als de inputstring begint met 'Hello ', return gewoon de string. Begint ze niet met 'Hello ', plak dit er dan voor.
function startsWithHello(string){
    if (string.substringData(0, 5) === 'Hello '){
        string = 'Hello ' + string;
    }
    return string;
}


// Schrijf een functie 'removeCharacter()'
// 2 parameters (string, number)
// output: Verwijder het zoveelste karakter uit je string en print de nieuwe string (met dus 1 karakter minder)
// TIP: Kijk naar String.substring of String.slice
function removeCharacter(string, number){
    return string.substringData(0, number - 1) + string.substringData(number, string.length);
}

function removeCharacter2(string, number){
    return string.slice(0, number - 1) + string.slice(number, string.length);
}


// Schrijf een functie 'capitalizeEveryWord()'.
// 1 parameter (string)
// output: Elk woord in de inputstring start met een hoofdletter, de rest van de letters zijn een kleine letter.
// TIP: Zoek String.prototype.split() , String.charAt() , String.substring() en String.join() op
function capitalizeEveryWord(string){
    string = string.toString();
    let newWord = '';
    let wasSpace = true;
    for (var i = 0; i < string.length; i++) {
        if (wasSpace){
            newWord += string.charAt(i).toUpperCase();
            wasSpace = false;
        } else if (string.charAt(i) === ' '){
            wasSpace = true;
            newWord += ' ';
        } else{
            newWord += string.charAt(i).toLowerCase();
        }
    }
    return newWord;
}


// Schrijf een functie 'countVowels()'.
// 1 parameter (string)
// output: Het aantal klinkers dat voorkomt in de input string.
// TIP: Loop over je string en kijk voor elke letter of die overeen komt met één van de klinkers.
function countVowels(string){
    let vowels = ['A', 'E', 'I', 'O', 'U', 'Y', 'W'];
    let vowelAmount = 0;
    for (var i = 0; i < string.length; i++){
        for (var y = 0; y < vowels.length; y++){
            if (vowels[i] === string.charAt(i).toUpperCase()){
                vowelAmount++;
            }
        }
    }
    return vowelAmount;
}


// Schrijf een functie 'maxValue()'
// 3 parameters
// output: De functie geeft het grootste getal van de 3 als resultaat
function maxValue(number, number2, number3){
    let highestNumber;
    if (number > number2){
        if (number > number3){
            highestNumber = number;
        } else{
            highestNumber = number3;
        }
    } else{
        if (number2 > number3){
            highestNumber = number2;
        } else{
            highestNumber = number3;
        }
    }
    return highestNumber;
}



console.log('Output oef 1:', multiply(2, 2), multiply(4, 12));
console.log('Output oef 2:', difference(156), difference(20));
console.log('Output oef 3:', isFifty(15, 35), isFifty(70, -20), isFifty(50, 180), isFifty(10, 12));
console.log('Output oef 4:', startsWithHello('Hello there'), startsWithHello('there'));
console.log('Output oef 5(a):', removeCharacter('Voorbeeld', 1), removeCharacter('Voorbeeld', 4));
console.log('Output oef 5(b):', removeCharacter2('Voorbeeld', 1), removeCharacter2('Voorbeeld', 4));
console.log('Output oef 6:', capitalizeEveryWord('elk woord zou moeten beginnen met een hoofdletter'));
console.log('Output oef 7:', `De inputstring bevat ${countVowels('oefening')} klinkers`);
console.log('Output oef 8:', `Het grootste nummer is ${maxValue(12, 5, 25)}`);



