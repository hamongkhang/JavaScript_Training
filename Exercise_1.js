/////////////////////////////////////////////////////Exercise 1//////////////////////////////////////////////////
// Write function have one paramiter(n). Return n numbers of Fibonacci number.
// input: 6
// output:1 1 2 3 5 8
const Fibonacci1 = (a) => {
    if (a == 1 || a == 2) {
        return 1;
    }
    else {
        return Fibonacci1(a - 1) + Fibonacci1(a - 2);
    }
}

const Fibonacci = (n) => {
    var a = [];
    var j;
    for (j = 0; j < n; j++)
        a[j] = Fibonacci1(j + 1);
    return a;
}
console.log(Fibonacci(6))


////////////////////////////////s/////////////////////Exercise 2//////////////////////////////////////////////////
// Write function have one paramiter(n). Check prime number
// input: 4
// output:false

const primeCheck = (n) => {
    var i = 2;
    if (n < 2) {
        return false;
    }
    while (i < n) {
        if (n % i == 0) {
            return false
            break;
        }
        i++;
    }
    return true;
}
console.log(primeCheck(4))

/////////////////////////////////////////////////////Exercise 3//////////////////////////////////////////////////
// input: [2,1,7,2,6,9,1,99,12,56]
// output:[1,1,2,2,6,7,9,12,56,99]


const sortAsc = (arr) => {
    var i, j, tmp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr

}
var arr = [2, 1, 7, 2, 6, 9, 1, 99, 12, 56]
console.log(sortAsc(arr))
/////////////////////////////////////////////////////Exercise 4//////////////////////////////////////////////////
// input: [2,1,7,2,6,9,1,99,12,56]
// output:[99,56,12,9,7,6,2,2,1,1]

const sortDesc = (arr) => {
    var i, j, tmp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr

}
var arr = [2, 1, 7, 2, 6, 9, 1, 99, 12, 56]
console.log(sortDesc(arr))

/////////////////////////////////////////////////////Exercise 5//////////////////////////////////////////////////
// Write function have one paramiter(n), then convert it to "hh:mm:ss" format.
// input: 7826
// output: 02:10:26
const convertFormat = (n) => {
    var hh, mm, ss;
    if (n != 0) {
        hh = Math.floor(n / 3600)
        mm = Math.floor(n % 3600 / 60)
        ss = Math.floor(n % 3600 % 60)
    }
    return hh + ":" + mm + ":" + ss;
}

console.log(convertFormat(7826))

/////////////////////////////////////////////////////Exercise 6//////////////////////////////////////////////////
// Given a string is the path of a file in the computer. The correct path is a path that has no leading and trailing slashes (/) and only one slash in between folders to separate it. Please remove the extra slashes to get a correct path
// input:  ////laptrinh//////code//////javascript/////
// output: laptrinh/code/javascript

const pathFormat = (file) => {
    newPath = "";
    var i;
    for (i = 0; i < file.length - 1; i++) {
        if ((newPath == "" && file[i] == "/") || (file[i] == file[i + 1]) && (file[i] == "/")) {
            continue;
        }
        newPath = newPath + file[i]
    }
    return newPath
}
console.log(pathFormat("////laptrinh//////code//////javascript/////"));

/////////////////////////////////////////////////////Exercise 7//////////////////////////////////////////////////
// Write function have one paramiter(n). Count the number of occurrences of each character in the string
// input:  Nguyen Thi Ut Vien
// output: n:3 g:1 u:2 y:1 e:2 t:2 h:1 i:2 v:1
let out = ""
const occurrencesOfCharacters = (str) => {
    if (str.length == 0) {
        console.log("Invalid string")
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if ((str[i] == str[j]) && (str[i] !== " ")) {
                count++;
            }
        }

        if (count > 0) {
            out += str[i] + ":" + count + " "
        }

    }
    console.log(out);}
    console.log(occurrencesOfCharacters("Nguyen Thi Ut Vien".toLowerCase()))


