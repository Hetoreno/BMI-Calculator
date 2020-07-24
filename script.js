let heightValue = document.querySelector(".height");
let weightValue = document.querySelector(".weight");
const calculate = document.querySelector(".submit");

calculate.addEventListener("click" , function(){
    let realHeight = heightValue.value;
    let realWeight = weightValue.value;
    heightValue.value = '';
    weightValue.value = '';

    let totalBMI = realWeight / (realHeight * realHeight);
    console.log(totalBMI);
});

