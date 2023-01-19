'use strict'
let money, time;
function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', 0);
    
    while(isNaN(money) || money == "" || money == null){
        money = prompt('Ваш бюджет на месяц?', 0);
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    chooseExpenses: function(){
            for (let i = 0; i < 2; i++) {
                let a = prompt('Обязательная статья на расходов в этом месяце?', '');
                let b = prompt('Во сколько это обойдется?', 0); 
                
                if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
                    appData.expenses[a] = b;
                } else {
                    i--;
                }
            } 
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++) {
            let optAnswer = prompt("Статья необязательных расходов?", '')
            appData.optionalExpenses[i] = optAnswer;
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/ 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay); 
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 1){
            console.log("minimun lvl money");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("medium lvl money");
        
        } else if (appData.moneyPerDay > 2000) {
            console.log("high lvl money");
        } else {
            console.log('Error');
        } 
    },
    checkSavings: function(){
        if(appData.saving == true){
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    // chooseIncome: function(){
    //     let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    //     if (typeof(items) === 'string' && typeof(items) != null && typeof(items) != '') {
    //         appData.income = items.split(', ');
    //         appData.income.push(prompt('Может что-то еще?'));
    //         appData.income.sort();
    //     } 
    // }
}

// function chooseIncome() {
//     let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
//     for (let i = 1; 1 <= i < 3; i++) {
//         if (typeof(items) === 'string' && typeof(items) != null && items != '') {
//             appData.income[items] = items;
//             appData.income = items.split(', ');
//             appData.income.push(prompt('Может что-то еще?'));
//             appData.income.sort();
//         } else {
//             i--;
//         }        
//     }
    
    
// }
// chooseIncome()

appData.income.forEach((item) => {
    console.log('Способы доп. заработка: ' + appData.income)
});

for(key in appData){
    console.log("Наша программа включает в себя данные: " + appData[key])
}