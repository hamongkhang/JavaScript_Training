const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
////////////////////////some/every/////////////////////
// Does any inventor have the letter 'y' in their name?
result = inventors.some(function (name) {
  return name.includes('y')
});
console.log(result);


// Does every inventor have the letter 'e' in their name?
result = inventors.every(function (name) {
  return name.includes('e')
});
console.log(result);


// Does every inventor have first name that's longer than 4 characters?
result = inventors.some(function (name) {
  return name.split(" ")[0] > 4
});
console.log(result)

/////////////////filter////////////////////////////////////
// Print out an array of the inventors whose name starts with 'A'.
result = inventors.filter(function (name) {
  return name[0] === ("A")
})
console.log(result);


// Print out an array of the inventors whose name contains 'n'.
result = inventors.filter(function (name) {
  return name.includes("n")
});
console.log(result);


// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

result = inventors.filter(function (name) {
  for (var i = 0; i < name.length -1; i++) {
    if (name[i] === name[i + 1]) {
      return name
    }
  }
});
console.log(result);

// Print out an array of the numbers which are odd.
result = numbers.filter(function (number) {
  if ((number > 0)&& (number % 2 === 0) ) {
    return number
  }
});
console.log(result);



// Print out an array of the numbers that have two digits.
result = numbers.filter(function (number) {
  if ((number > 9) && (number < 100)) {
    return number
  }
});
console.log(result);


// Print out an array of the numbers which are prime.
function check_prime(number) {
  var i;
  if (number <= 1) { return false; }
  for (i = 2; i <= number / 2; i++)
    if (number % i === 0) { return false; }
  return true;
}
result = numbers.filter(function (number) {
  if (check_prime(number)) {
    return number;
  }
});
console.log(result)

/////////////////MAP/////////////////////////
// Print out the first name of each inventor.
result = inventors.map(function (name) {
  return name.split(" ")[0]
});
console.log(result)


// Print out the length of every inventor's full name.

result = inventors.map(function (fullName) {
  return fullName + ": " + fullName.length
});
console.log(result)
// Print out initials of all inventors(e.g. A.E., I.N., ...)
result = inventors.map(function (name) {
  space = name.indexOf(" ");
  return name[0] + "." + name[space + 1]
});
console.log(result)

// Print out an array of every number multiplied by 100.
result = numbers.map(function (number) {
  return 100 * number
});
console.log(result)

////////////////////find/findIndex///////////////////////
// Find the inventor that has a middle name.
const countSpace = (name) => {
  var count=0, i;
  for (i = 0; i < name.length; i++)
    if (name[i] === " ") {
      count++
    };
  return count;
}
result = inventors.find(function (name) {
  if (countSpace(name) >= 2) {
    return name
  }
});
console.log(result);


// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
// const find_index = (name) => {
  result = inventors.filter(function (name) {
    if( countSpace(name) <= 1){
      return name
    }
  });
  console.log(result)

// Find the number divisible by 7.
result = numbers.find(function (number) {
  if (number !== 0) {
    return number % 7 === 0;
  }
}
);
console.log(result)

// task 1: Given a string, Write a function to reverse each word in the sentence
const string = "Nguyen Thi Ut Vien";

const reverseSentence = (string) => {
  const array = string.split(" ");
  result = array.map(function (characters) {
    return characters.split("").reverse().join("");
  });
  return result.join(" ")
};
console.log(reverseSentence(string));


// task 2: Write a recursive function to reverse the string.
const reverse = (string) => {
  if (string === "") {
    return "";
  }
  else {
    return reverse(string.slice(1)) + string.charAt(0);
  }
};
console.log(reverse("Nguyen Thi Ut Vien"))

// task 3: Given an array, Write a function to reverse the items in that array.
const reverseArray = (array) => {
  for (var i = 0; i < (array.length - 1); i++) {
    array.splice(i, 0, array.pop());
  }
  return array;
}
array = [1, 2, 4, 3]
console.log(reverseArray(array))

// task 4: write a recursive function that reverses an array
const reverseArr = (array) => {
  if (array.length === 0) {
    return "";
  }
  var s = array.shift();
  return reverseArr(array) + s
};
array = [1, 3, 2, 4];

console.log(reverseArr(array))

// task 5: write a recursive sum function

const sum = (number) => {
  if (number > 0) {
    return number + sum(number - 1);
  }
  else {
    return number
  }
}

console.log(sum(5));


// task 6: Write a recursive function to know if a number is prime
const checkPrime = (number) => {
  if (number <= 2) {
    return false
  }
  if (number % 2 === 0) {
    return false;
  }
  return checkPrime(number)
}
console.log(checkPrime(4))

//task 7: Write a class that includes 4 methods: add, update, remove, compare

class User {
  users = [{ id: 1, name: 'Lan' },
  { id: 2, name: 'Hoa' }];

  add(user) {
    const isExist = this.users.some(item=> item.id == user.id);
    if (isExist) return this.users;
    this.users=[...this.users,user];
    return this.users;
  };

  update(user) {
    const index = this.users.findIndex(item=> item.id === user.id)
    this.users[index]=user;
    return this.users;
  };

  remove(id) {
    this.users = this.users.filter(item=> item.id !==id);
    return this.users;
};
};

const user = new User();
console.log(user.add({id:3,name:"Vien"}));
console.log(user.update({id:2, name:"Khang"}))
console.log(user.remove(2));