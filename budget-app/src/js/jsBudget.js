//task №1
let btnStartCount = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpVal = document.querySelector('.optionalexpenses-value'),
	incomeExpVal = document.querySelectorAll('.income-value'),
	monthSavings = document.querySelectorAll('.monthsavings-value'), //.querySelectorAll возвращает псевдомассив к которому мы можем применить forEach;
	yearSavings = document.querySelectorAll('.yearsavings-value'),



	//task №2

	expensesItem = document.getElementsByClassName('expenses-item'),
	btnApproveExpensesItem = document.getElementsByTagName('button')[0],
	btnApproveOptionalExpItem = document.getElementsByTagName('button')[1],
	btnCountAllExp = document.getElementsByTagName('button')[2],
	optExpInput = document.querySelectorAll('.optionalexpenses-item'),
	choosenIncome = document.querySelector('.choose-income'),
	checkBoxSavings = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearVal = document.querySelector('.year-value'),
	monthVal = document.querySelector('.month-value'),
	dayVal = document.querySelector('.day-value');

console.log(expensesItem);










//НАЧАЛО ПРОГРАММЫ ===
let money, time;


btnStartCount.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == "" || money === null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budget = money;
	appData.dataTime = time;
	budgetValue.textContent = money.toFixed();
	yearVal.value = new Date(Date.parse(time)).getFullYear(); //в инпутах лучше использовать value а не textContent
	monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
	dayVal.value = new Date(Date.parse(time)).getDate();
});


// КНОПКА  УТВЕРДИТЬ ОСНОВНЫЕ ЗАТРАТЫ
btnApproveExpensesItem.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 20 && b !== 'string') {
			console.log("Всё верно");
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i = i - 1;
		}
	}
	expensesValue.textContent = sum;
});



// КНОПКА  УТВЕРДИТЬ НЕОБЯЗАТЕЛЬНЫЕ ЗАТРАТЫ


btnApproveOptionalExpItem.addEventListener('click', () => {
	for (let i = 0; i < optExpInput.length; i++) {
		let opt = optExpInput.value;
		appData.optionalExpenses[i] = opt;
		optionalExpVal.textContent += appData.optionalExpenses[i] + "  ";
	}
});

// КНОПКА  РАСЧИТАТЬ ДНЕВНОЙ БЮДЖЕТ И ПОКАЗАТЬ УРОВЕНЬ ДОСТАТКА


btnCountAllExp.addEventListener('click', () => {
	if (appData.budget != undefined) {

		appData.budgetPerDay = (appData.budget / 30).toFixed;
		dayBudgetValue.textContent = appData.budgetPerDay;


		if (appData.budgetPerDay < 1000) {
			levelValue.textContent = "Минимальный достаток";
		} else if (appData.budgetPerDay > 1000 && appData.budgetPerDay < 2000) {
			levelValue.textContent = "Средний достаток";
		} else if (appData.budgetPerDay > 2000) {
			levelValue.textContent = "Высокий достаток";
		} else {
			levelValue.textContent = "Что-то пошло не так";
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

choosenIncome.addEventListener('input', () => {
	let items = choosenIncome.value;
	appData.income = items.split(',');
	incomeExpVal.textContent = appData.income;

});

checkBoxSavings.addEventListener('click', () => {
	if (checkBoxSavings == true) {
		checkBoxSavings = false;
	} else {
		checkBoxSavings = true;
	}
});

chooseSum.addEventListener('input', () => {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
		appData.yearIncome = (sum / 100 * percent).toFixed(2);

		monthSavings.textContent = appData.monthIncome;
		yearSavings.textContent = appData.yearIncome;

	}
});


choosePercent.addEventListener('input', () => {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
		appData.yearIncome = (sum / 100 * percent).toFixed(2);

		monthSavings.textContent = appData.monthIncome;
		yearSavings.textContent = appData.yearIncome;
	}
});



let appData = {
	budget: money,
	dataTime: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

};