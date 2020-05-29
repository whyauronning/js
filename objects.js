//ОБЪЕКТЫ!!!

let object = new Object();

let options = {
    width: 1024,
    height: 1024,
    name : "Test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border : "black",
    background : "red"
};

console.log(options);
delete options.bool;
console.log(options);

for (let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr = ["first","second","third",4,5];

// arr.forEach(function(item,i, mass){
//     console.log(i + ": " + item +" (массив:" + mass + ')');
// });
//     console.log(arr);
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");


// for(let i=0; i < arr.length; i++){
//     console.log(arr(i));
// } 


// for(let key in mass){
//     console.log(mass[key]);
// }

// let ans = prompt("",""),
//     mass = [];

// mass = ans.split(',');
// console.log(mass);

// let arr =['awwe', 'zzz' ,'fdfdf'],
    // i = arr.join(', ');
    // let mass = [6,7,7,6,7]; 
    // mass.sort(compareNum);
    // // function compareNum(a,b){
    // //     return a-b;
    // // }
    // console.log(mass);


