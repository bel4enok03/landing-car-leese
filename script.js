// Получаем элементы из DOM

const costInput = document.getElementById('total-cost');
const percentInput = document.getElementById('total-percent');
const periodInput = document.getElementById('total-period');

const amountEl = document.getElementById('amount-of-lease');
const paymentEl = document.getElementById('monthly-payment');

const costRange = document.getElementById('total-cost-range');
const percentRange = document.getElementById('total-percent-range');
const periodRange = document.getElementById('total-period-range');

//стили для ползунка
const inputRanges = document.querySelectorAll('.input-range');
const tracks = document.querySelectorAll('.track');

inputRanges.forEach((inputRange, index) => {
	inputRange.addEventListener('input', function () {
		const percent = (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min);
		tracks[index].style.width = percent * 100 + '%';
	});
});

// Инициализируем значения по умолчанию
costInput.value = 1000000;
costRange.value = 1000000;
percentInput.value = 10;
percentRange.value = 10;
periodInput.value = 1;
periodRange.value = 1;

// Обработчик событий для изменения значения ползунка
function handleRangeChange(inputEl, rangeEl) {
	rangeEl.addEventListener('input', () => {
		inputEl.value = rangeEl.value;
		updateCalculations();
	});
}

// Обработчик событий для изменения значения инпута
function handleInputChange(inputEl, rangeEl) {
	inputEl.addEventListener('input', () => {
		// Если введенное значение находится в диапазоне, то обновляем значение ползунка
		if (inputEl.value >= rangeEl.min && inputEl.value <= rangeEl.max) {
			rangeEl.value = inputEl.value;
			updateCalculations();
		}
	});
}

// Функция для обновления расчетов
function updateCalculations() {
	const cost = Number(costInput.value);
	const percent = Number(percentInput.value) / 100;
	const period = Number(periodInput.value);
	const initial = cost * percent;
	const monthPay = (cost - initial) * ((0.035 * Math.pow(1 + 0.035, period)) / (Math.pow(1 + 0.035, period) - 1));
	const amount = initial + period * monthPay;
	const formatter = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	});
	amountEl.innerText = formatter.format(amount);
	paymentEl.innerText = formatter.format(monthPay);
}

// Добавляем обработчики событий на элементы
handleRangeChange(costInput, costRange);
handleRangeChange(percentInput, percentRange);
handleRangeChange(periodInput, periodRange);
handleInputChange(costInput, costRange);
handleInputChange(percentInput, percentRange);
handleInputChange(periodInput, periodRange);

// Обновляем расчеты при инициализации
updateCalculations();



// отправка данных на сервер
const buttonEl = document.querySelector('.btn');

function sendFormData() {
	// Блокируем все инпуты и слайдеры
	costInput.disabled = true;
	costRange.disabled = true;
	percentInput.disabled = true;
	percentRange.disabled = true;
	periodInput.disabled = true;
	periodRange.disabled = true;
	buttonEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
	buttonEl.disabled = true;

	const cost = Number(costInput.value);
	const percent = Number(percentInput.value) / 100;
	const period = Number(periodInput.value);
	const initial = cost * percent;
	const monthPay = (cost - initial) * ((0.035 * Math.pow(1 + 0.035, period)) / (Math.pow(1 + 0.035, period) - 1));
	const amount = initial + period * monthPay;

	const data = {
		car_coast: cost,
		initail_payment: initial,
		initail_payment_percent: percent * 100,
		lease_term: period,
		total_sum: amount,
		monthly_payment_from: monthPay,
	};

	fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			// Разблокируем все инпуты и слайдеры
			costInput.disabled = false;
			costRange.disabled = false;
			percentInput.disabled = false;
			percentRange.disabled = false;
			periodInput.disabled = false;
			periodRange.disabled = false;
			buttonEl.innerHTML = 'Оформить заявку';
			buttonEl.disabled = false;
			console.log(data);
		})
		.catch((error) => {
			// Разблокируем все инпуты и слайдеры
			costInput.disabled = false;
			costRange.disabled = false;
			percentInput.disabled = false;
			percentRange.disabled = false;
			periodInput.disabled = false;
			periodRange.disabled = false;
			buttonEl.innerHTML = 'Оформить заявку';
			buttonEl.disabled = false;
			console.error('Error:', error);
		});
}

buttonEl.addEventListener('click', sendFormData);
