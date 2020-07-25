let heightValue = document.querySelector(".height");
let weightValue = document.querySelector(".weight");
const calculate = document.querySelector(".submit");
const display = document.querySelector(".value"); 

calculate.addEventListener("click" , function(){
    let realHeight = heightValue.value;
    let realWeight = weightValue.value;
    heightValue.value = '';
    weightValue.value = '';
    var totalBMI = realWeight / (realHeight * realHeight);
    console.log(totalBMI);

    display.innerText = totalBMI;
});

