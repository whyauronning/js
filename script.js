let money,time;
        
function start() {
    money = +prompt("Ваш бюджет на месяц?",'');
    time = +prompt("Введите дату в формате YYYY-MM-DD",'');
    
    while(isNaN(money) || money == "" || money === null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    
}
start();

let appData = { 
    budget : money,
    dataTime : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function(){
        for(let i=0; i<2;i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = +prompt("Во сколько обойдется?",'');
            if((typeof(a))=== 'string'
             && (typeof(a))!= null
              && ( typeof(b)) != null
               && a != '' && b != '' 
               && a.length < 20
                && b !== 'string') {
                console.log("gotovo");
                appData.expenses[a] = b;
            } else {
            i= i - 1; 
            }      
    }
    },
    chooseOptExpenses: function(){
        for(let i=0; i<3;i++){
            let a = prompt("Введите НЕобязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдётся?",'');
                if((typeof(a))=== 'string' && (typeof(a))!= null && ( typeof(b)) != null && a != '' && b != '' && a.length < 20 && b != 'string') {
                    console.log("gotovo");
                    appData.optionalExpenses[a] = b;
                }else{
                    i = i - 1;
                }
        }
    },
    detectLevel: function(){
        if (appData.budgetPerDay < 100) {
            console.log("Минимальный достаток");
        }else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
            console.log("Средний достаток");
        }else if (appData.budgetPerDay > 2000) {
            console.log("Высокий достаток");
        } else {
            console.log("Что-то пошло не так");
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с вашего депозита :" + appData.monthIncome);  
        }
    },
    detectDayBudget: function(){
        appData.budgetPerDay = (appData.budget/30).toFixed;
    alert("Ежедневный достаток" + " " + appData.budgetPerDay);
    },
    chooseIncome : function(){

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)" + " ',' ");

        if(typeof(items) !== 'string' && typeof(items) == null && items == "" ){
            console.log("Вы ввели некорректные данные");
        } else {
            appData.income = items.split(',');
            appData.income = items.push("может ещё какой-нибудь способ?");
            appData.income = items.sort();
        }
        
        appData.income.forEach(function(itemmass, i){
            alert("Способы доп. заработка:" + (i+1) +" " + itemmass);
        });
}
};

for (let key in appData){
    console.log("Наша программа включает в себя данные:" + key + " - " + appData[key]); 
}
       
// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     wrapper = document.querySelector('.wrapper');

//    box.style.backgroundColor = 'blue';
//    btn[1].style.borderRadius = '100%';
//    circle[0].style.backgroundColor = "red";
//    circle[1].style.backgroundColor =  'yellow';
//    circle[2].style.backgroundColor = 'green';

//    for(let i = 0; i < hearts.length; i++){
//        hearts[i].style.backgroundColor = 'blue';
//    }

//    hearts.forEach(function(item, i , heartses){
//     item.style.backgroundColor = 'blue';
//    });

// let div  = document.createElement('div'),
//     txt  = document.createTextNode('Отличный текст');

//     div.classList.add('black');
    // document.body.appendChild(div);

    // document.body.insertBefore(div, circle[0]);
    // document.body.removeChild(circle[1]);
    // document.body.replaceChild(btn[1], circle[1]);

    // div.innerHTML = '<h1>Hello World!/h1>';
    // div.textContent = 'HELLO WORLD!!!';
