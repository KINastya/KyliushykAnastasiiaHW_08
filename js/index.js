// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// switch (numOrStr) {
//     case null:
//         console.log('ви скасували');
//         break;
//     case '' || ' ':
//         console.log('Empty String');
//         break;
//     case isNaN( +numOrStr ): //!не поняла как это сделать таким способом(((
//         console.log(' number is Ba_NaN');
//         break;
//         default:
//             console.log('OK!');
//             break;
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr === ''):
        console.log('Empty String');
        break;
    case isNaN( +numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}