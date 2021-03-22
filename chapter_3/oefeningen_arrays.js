let digital = ['toegepaste-informatica','elektronica-ict','software-management','systeem & netwerkbeheer'];
let honden = ['golden retriever', 'labrador','chihuaua','dobberman'];

oefening1();
oefening2();
oefening3();
//oefening4(); // heeft html pagina nodig
oefening5();
oefening6();
oefening7();
//oefening8(); // heeft html pagina nodig
oefening9();

function oefening1(){
    console.log('=====================');
    console.log(digital.length);
}

function oefening2(){
    console.log('=====================');
    console.log(digital.length);
    digital.push('multimedia');
    console.log(digital.length);
}

function oefening3(){
    console.log('=====================');
    console.log(digital.join('\n'));
}

function oefening4(){
    console.log('=====================');
    let randomGetal = 0;
    do{
        randomGetal = parseInt(prompt('Geef random getal'));
    }while(randomGetal < 0 || randomGetal > 4)
    console.log(honden[randomGetal]);
}

function oefening5(){
    console.log('=====================');
    honden.unshift('ras1', 'ras2', 'ras3', 'ras4');
    console.log(honden);
}

function oefening6(){
    console.log('=====================');
    honden.shift();
    honden.pop();
    console.log(honden);
}

function oefening7(){
    console.log('=====================');
    honden.slice(2, 2);
    console.log(honden);
}

function oefening8(){
    console.log('=====================');
    let dagenInMaand = [31,28,31,30,31,30,31,31,30,31,30,31];
    let maand = parseInt(prompt('geef maand nummer'));
    for (let i = 0; i < dagenInMaand[maand]; i++){
        console.log(i + '/' + maand + '/2021')
    }
}

function oefening9(){
    console.log('=====================');
    let dagenInMaand = [31,28,31,30,31,30,31,31,30,31,30,31];
    let dag = 0;
    let dagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
    let maand = parseInt('4');
    for (let i = 1; i < dagenInMaand[maand]; i++){
        console.log(dagen[dag] + ', ' + i + '/' + maand + '/2021')
        dag++;
        if (dag >= 7) dag = 0;
    }
}