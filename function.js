// let num = 20;
// function showFirstMessage (text){
//     alert(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("Hello Vlad!");
// console.log(num);

// function calc(a,b){
//     returm (a+b);
// }
// console.log(calc(10,514));

// let calc = (a,b) => a+b; // стрелочная функция

// function retVar (){
//       let num = 50;
//       return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);

// преобразование свойства и методы

// let str = "text"; //свойство
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase()); // методы строк

// let twelve = "12.2px";
// console.log(Math.round(twelve));
// console.log(parseFloat(twelve)); // методы чисел
// console.log(parseInt(twelve));

// CALL BACK FUNCTION

// function first () {
    // action
//     setTimeout(function(){
//         console.log(1);
//     } , 500);
// }

// function second(){ 
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang,callback){
//     console.log("Я учу "+ lang);
//     callback();
// }

// function learnIsDone(){
//     console.log("Я провёл 3-й урок!");
// }

//     learnJS("Java", learnIsDone);
    
    // learnJS("Javascript", function() {
//     console.log("Я провёл 3-й урок!"); 
// });

// function checkList(check1,callback){    
//     console.log('проверка №1' + check1);
//     console.log(callback(check1));
   
// }
// function balls(check1){
//     return check1!== null && (typeof(check1) === 'string');
// }
// checkList('CheckTest', balls);