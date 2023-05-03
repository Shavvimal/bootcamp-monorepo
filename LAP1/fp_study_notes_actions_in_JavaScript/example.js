// const str = 'I dislike trains as a mode of transport';
// console.log(str.length)
// console.log(str.slice(10, 15));
// console.log(str.search("train"))

// const str2 = 'abcdefghijklmnopqrstuvwxyz'
// console.log(str2[4])

// const str3 = 'I love you';
// console.log(str3.toUpperCase())


// num = 1.23456789
// console.log(num.toFixed(2))

// str4 = '45'
// console.log(parseInt(str4, 10))

// console.log(Number(str4))

// let arr = ['red', 'yellow', 'green', 'blue']
// console.log(arr[0] + ' ' + arr[3])

// arr.push('orange')
// console.log(arr)

// console.log(arr[2])


// let array1 = [23123, 2, -328, 0];
// let reducer = ((minSoFar, currentValue) => { 
//     if (currentValue < minSoFar) {
//         return currentValue}
//         else {return minSoFar}
//     })
// console.log(array1.reduce(reducer))


function sent(country, flight, home) { 
    return `I came from ${home} and it took me ${flight} hours to get here. But i love ${country}`;
}

console.log(sent("France", "10", "England"))