//input
// const totalCost = document.getElementById ("total-cost");
// const totalPercent = document.getElementById ("total-percent");
// const totalPeriod = document.getElementById ("total-period");

// // input range
// const totalCostRange = document.getElementById ("total-cost-range");
// const totalPercentRange = document.getElementById ("total-percent-range");
// const totalPeriodRange = document.getElementById ("total-period-range");

// // final results
// const amountOfLease = document.getElementById ("amount-of-lease");
// const monthlyPaymant = document.getElementById ("monthly-paymant");

// //All ranges
// const inputsRange = document.querySelectorAll (".input-range");


// const assignValue = () => {
//     totalCost.value = totalCostRange.value;
//     totalPercent.value = totalPercentRange.value;
//     totalPeriod.value = totalPeriodRange.value;
// }

// assignValue ()

// for (let input of inputsRange){
//     input.addEventListener ("input", () => {
//         assignValue ();
//     })
// }


// S = (P–р)/(1–1/(1+р)2) - где S — сумма лизинговых платежей; P — стоимость лизингообъекта; р — процентная ставка.

//let amountOfLeasePaymant;
//let costOfLeeseObject;
//let interestRate;

//amountOfLeasePaymant = (costOfLeeseObject - interestRate) / (1-1/(1 ++ costOfLeeseObject)2);

$(function(){
    const maxRange = 6000000;
    $('.form-range').on('input',function(){
        let trackWidth = $(this).width();
        console.log(trackWidth);
        let rate = trackWidth / maxRange;
        let value = $(this).val()*rate;
        if (value == 71.166){
            value = 0;
        }
        console.log(value);
        $(this).siblings('.track').css('width',value);
        
        
    })
})