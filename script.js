$(function () {
	$('.form-range').on('input', function () {
		let maxRange = parseInt($(this).attr('max'));
		let minRange = parseInt($(this).attr('min'));
		let value = parseInt($(this).val());
		let percent = ((value - minRange) / (maxRange - minRange)) * 100;

		$(this)
			.siblings('.track')
			.css('width', percent + '%');
	});
});

const totalCost = document.getElementById('total-cost');
const totalPercent = document.getElementById('total-percent');
const totalPeriod = document.getElementById('total-period');

const totalCostRange = document.getElementById('total-cost-range');
const totalPercentRange = document.getElementById('total-percent-range');
const totalPeriodRange = document.getElementById('total-period-range');

const inputsRange = document.querySelectorAll('.input-range');

const amountOfLease = document.querySelector('#amount-of-lease');
const monthlyPaymant = document.querySelector('#monthly-paymant');

const assignValue = () => {
	totalCost.value = totalCostRange.value;
	totalPercent.value = Math.floor((totalPercentRange.value / 100) * totalCost.value);
	totalPeriod.value = totalPeriodRange.value;

	let totalCostOfNumber = parseFloat(totalCost.value);
	let totalPercentOfNumber = parseFloat(totalPercent.value);
	let totalPeriodOfNumber = parseFloat(totalPeriod.value);

	//(Стоимость автомобиля - Первоначальный взнос) * ((Процентная ставка * (1 + Процентная ставка)^Срок кредита в месяцах) / ((1 + Процентная ставка)^Срок кредита в месяцах - 1))
	//const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));

	let initialPayment = Math.floor(
		(totalCostOfNumber - totalPercentOfNumber) *
			((0.035 * Math.pow(1 + 0.04, totalPeriodOfNumber)) / (Math.pow(1 + 0.04, totalPeriodOfNumber) - 1))
	);
	// Для поля “Сумма договора лизинга”:
	// Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж

	let contractAmount = Math.floor(totalPercentOfNumber + totalPeriodOfNumber * initialPayment);
	console.log(typeof contractAmount);

	monthlyPaymant.innerHTML = `${initialPayment} Р`;
	amountOfLease.innerHTML = `${contractAmount} Р`;

};



for (let input of inputsRange) {
	input.addEventListener('input', () => {
		assignValue();
	});
}
