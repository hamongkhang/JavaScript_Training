/////////////////////////////////////////////////////Exercise 1//////////////////////////////////////////////////
// Write function have one paramiter(n). Return n numbers of Fibonacci number.
// input: 6
// output:1 1 2 3 5 8
const Fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

const FindFibonacci = (n) => {
    var arrayOfFibonacci = [];
    var i;
    for (i = 0; i < n; i++)
        arrayOfFibonacci[i] = Fibonacci(i + 1);
    return arrayOfFibonacci;
}
console.log(FindFibonacci(6))


/////////////////////////////////////////////////////Exercise 2//////////////////////////////////////////////////
// Write function have one paramiter(n). Check prime number
// input: 4
// output:false

const checkPrime = (n) => {
    var i = 2;
    if (n < 2) {
        return false;
    }
    while (i < n) {
        if (n % i === 0) {
            return false
            break;
        }
        i++;
    }
    return true;
}
console.log(checkPrime(4))

/////////////////////////////////////////////////////Exercise 3//////////////////////////////////////////////////
// input: [2,1,7,2,6,9,1,99,12,56]
// output:[1,1,2,2,6,7,9,12,56,99]


const sortAscending = (array) => {
    var i, j, temp;
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array

}
var array = [2, 1, 7, 2, 6, 9, 1, 99, 12, 56]
console.log(sortAscending(array))
/////////////////////////////////////////////////////Exercise 4//////////////////////////////////////////////////
// input: [2,1,7,2,6,9,1,99,12,56]
// output:[99,56,12,9,7,6,2,2,1,1]

const sortDescending = (array) => {
    var i, j, temp;
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array

}
var array = [2, 1, 7, 2, 6, 9, 1, 99, 12, 56]
console.log(sortDescending(array))

/////////////////////////////////////////////////////Exercise 5//////////////////////////////////////////////////
// Write function have one paramiter(n), then convert it to "hh:mm:ss" format.
// input: 7826
// output: 02:10:26
const convertTime = (time) => {
    var hours, minutes, seconds;
    if (time != 0) {
        hours = Math.floor(time / 3600)
        minutes = Math.floor(time % 3600 / 60)
        seconds = Math.floor(time % 3600 % 60)
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 0) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    return hours + ":" + minutes + ":" + seconds;
}

console.log(convertTime(7826))

/////////////////////////////////////////////////////Exercise 6//////////////////////////////////////////////////
// Given a string is the path of a file in the computer. The correct path is a path that has no leading and trailing slashes (/) and only one slash in between folders to separate it. Please remove the extra slashes to get a correct path
// input:  ////laptrinh//////code//////javascript/////
// output: laptrinh/code/javascript

const formatPath = (path) => {
    newPath = "";
    var i;
    for (i = 0; i < path.length - 1; i++) {
        if ((newPath === "" && path[i] === "/") || (path[i] === path[i + 1]) && (path[i] === "/")) {
            continue;
        }
        newPath = newPath + path[i]
    }
    return newPath
}
console.log(formatPath("////laptrinh//////code//////javascript/////"));

/////////////////////////////////////////////////////Exercise 7//////////////////////////////////////////////////
// Write function have one paramiter(n). Count the number of occurrences of each character in the string
// input:  Nguyen Thi Ut Vien
// output: n:3 g:1 u:2 y:1 e:2 t:2 h:1 i:2 v:1
let result = ""
const occurrencesOfCharacters = (string) => {
    if (string.length === 0) {
        console.log("Invalid string")
        return;
    }
    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i > j) {
                break;
            }
            if ((string[i] === string[j]) && (string[i] !== " ")) {
                count++;
            }

        }

        if (count > 0) {
            result += string[i] + ":" + count + " "
        }

    }
    return result
}


console.log(occurrencesOfCharacters("Nguyen Thi Ut Vien".toLowerCase()))