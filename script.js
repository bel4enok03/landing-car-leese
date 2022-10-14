
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

$(function(){
    $('.form-range').on('input',function(){
        let maxRange = parseInt($(this).attr('max'));
        let minRange = parseInt($(this).attr('min'));
        let value = parseInt($(this).val());
        let percent = ((value - minRange) / (maxRange - minRange) * 100);

        $(this).siblings('.track').css('width',percent + '%');
    })
});

const totalCost = document.getElementById ("total-cost");
const totalPercent = document.getElementById ("total-percent");
const totalPeriod = document.getElementById ("total-period");

const totalCostRange = document.getElementById ("total-cost-range");
const totalPercentRange = document.getElementById ("total-percent-range");
const totalPeriodRange = document.getElementById ("total-period-range");


const inputsRange = document.querySelectorAll (".input-range");

const assignValue = () => {
        totalCost.value = totalCostRange.value;
        totalPercent.value = totalPercentRange.value;
        totalPeriod.value = totalPeriodRange.value;
    }
    
    assignValue ()
    
    for (let input of inputsRange){
        input.addEventListener ("input", () => {
            assignValue ();
        })
    }

const percentRate = 0.035;




// Формулы расчета для полей:
// Процентная ставка = 3.5%
// Для поля “Первоначальный взнос”: 
// Первоначальный взнос (в процентах) * Стоимость автомобиля
// Для поля “Сумма договора лизинга”:
// Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж
//Для поля “Ежемесячный платеж от”:

//(Стоимость автомобиля - Первоначальный взнос) * ((Процентная ставка * (1 + Процентная ставка)^Срок кредита в месяцах) / ((1 + Процентная ставка)^Срок кредита в месяцах - 1)) 
//const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));

