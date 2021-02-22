let getal1 = prompt("Getal 1:", "2");
let getal2 = prompt("Getal 2:", "4");

let solutionArray = [];
solutionArray.push(getal1 + getal2);
solutionArray.push(getal1 - getal2);
solutionArray.push(getal1 * getal2);
solutionArray.push(getal1 / getal2);
solutionArray.push(getal1 % getal2);
solutionArray.push(getal1++);
solutionArray.push(getal1--);
solutionArray.push(getal1 && getal2);
solutionArray.push(getal1 || getal2);
solutionArray.push(!getal1);
solutionArray.push(getal1 == getal2);
solutionArray.push(getal1 === getal2);
solutionArray.push(getal1 != getal2);
solutionArray.push(getal1 !== getal2);
solutionArray.push(getal1 < getal2);
solutionArray.push(getal1 <= getal2);
solutionArray.push(getal1 > getal2);
solutionArray.push(getal1 >= getal2);
let teller = 0;
let table = document.getElementById("informationTable");
for (let i = 1; i < table.rows.length; i++){
    table.rows[i].cells[1].innerHTML = solutionArray[teller];
    teller++;
}