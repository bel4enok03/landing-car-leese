// input
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

/*$(function(){
    const maxRange = 6000000;
    $('.form-range').on('input',function(){
        let trackWidth = $(this).width();
        console.log(trackWidth);
        let rate = trackWidth / maxRange;
        let value = $(this).val()*rate;
        if (value == 71.16666666666667){
            value = 0;
        }
        console.log(value);
        $(this).siblings('.track').css('width',value);
        
        
    })
})
*/

$(function(){
    $('.form-range').on('input',function(){
        let maxRange = parseInt($(this).attr('max'));
        let minRange = parseInt($(this).attr('min'));
        let value = parseInt($(this).val());
        let percent = ((value - minRange) / (maxRange - minRange) * 100);

        $(this).siblings('.track').css('width',percent + '%');
    })
});



// let $slider = $('.form-range');
// let $fill = $('.track');

// function setBar() {
//     let min = parseInt($slider.attr('min'));
//     let max = parseInt($slider.attr('max'));
//     let value = parseInt($slider.val());
//     let percent = ((value - min) / (max - min) * 100);

//     $fill.css('width', percent + '%');
// }

// $slider.on('input', setBar);

// setBar()