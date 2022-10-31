// There is an array below, you follow each task.
const arrays = [
    {
      id: 1,
      name: "Hà Mộng Khang",
      age: 22,
    },
    {
      id: 2,
      name: "Nguyễn Long Hải",
      age: 21,
    },
    {
      id: 3,
      name: "Hồ Thị Ngọc Nhài",
      age: 23,
    },
    {
      id: 4,
      name: "Nguyễn Thị Út Viên",
      age: 24,
    },
  ];
  
  // task 1: Add a new user to the beginning of the array
arrays.unshift({id:0, name:"Phan Anh Thu",age: 19})
console.log(arrays)

  
  // task 2: Add a new user at the end of the array
arrays.push({id:6, name:"Nguyen Lan Anh",age: 12})
console.log(arrays)
  
  // task 3: add multiple users to the array
arrays.push({id:7,name:"Phan Ninh Lan",age:22},{id:8, name :"Tran Nhu Huyen",age:45})
console.log(arrays)
  
  // task 4: remove 1 user from the array
arrays.pop()
console.log(arrays)
  
  // task 5: filter out users with age >= 22;
result = arrays.filter(function(user){
  return user.age>25
})
console.log(result)
  // task 6: Transform the current array into a new array with the new field "class" of type string
arrays.map(function(user){
  user.class = "newField"
});
console.log(arrays);
  
  // task 7: Find a user with age = 23//filter
result = arrays.filter(function(user){
  return user.age===23});
  console.log(result)
  // task 8: use for loop to get users with age >= 23
 const findUsers =(arrays)=>{
  var i ;
  var newArrays=[];
  for(i =0; i<arrays.length-1; i++){
    if (arrays[i].age>=23){
      newArrays.push(arrays[i])
    }
    return newArrays;
  }}
  console.log(findUsers(arrays))

 
  // task 9: Based on the above information array, and the ids array below, filter out information about users with id as the array below.
const findUserById = (id)=>{
  result = arrays.filter(function(user){
    return user.id ===id
  })
return result};
console.log(findUserById(2));
  // task 10: sort the users in the above array in ascending age order

  result = arrays.sort(function(user1,user2){
    return (parseFloat(user1.age)-parseFloat(user2.age))
  })
  console.log(result);
  // task 11: update the information in the array above with the field "class" converted in task 6 to uppercase (upCase)
result = arrays.map(function(user){
  return user.class.toUpperCase();
})
console.log(result)
  
  // task 12: get the last element of the above array

  var lastElement = arrays.slice(arrays.length-1);
  console.log(lastElement)

  // task 13: get the first element of the above array
var firstElement = arrays.slice(0,1);
console.log(firstElement)
  
  // task 14: for below 2 arrays, merge 2 arrays into one and remove duplicate elements, expected result => ["Chicken", "Duck", "Dog"]
  // array1 = ["Chicken", "Duck"];
  // array2 = ["Duck", "Dog"];
  
const array1=["Chicken","Duck"]
const array2 =["Duck","Dog"];
var newArray = Array.from(new Set(array1.concat(array2)));
console.log(newArray);

//   const person = {
//     firstName: "John",
//     lastName: "Doe",
// };
  // task 15: get its key from the person object above. result => ['firstName', 'lastName']
  const person = {
      firstName: "John",
      lastName: "Doe",};

  var result = Object.keys(person);
  console.log(result)
  
  // task 16: from the person object above get its value. result => ['John', 'Doe']

  var result = Object.values(person)
  console.log(result)
  // task 17: convert above object to array. expected result => [{firsName: 'John'}, {lastName: 'Doe'}]
    var result = Object.entries(person)
    console.log(result)
  // task 18: from the person object above add an "age" field to the object. expected result => { firstName: "John", lastName: "Doe", age: 100 };
person.age =100;
console.log(person)
  
  // task 19: for the array string below, convert this array to object. Expected Result => {0:"a", 1:"b", 2:"c"}
   const arrString = ["a", "b", "c"];
  var newArrayString = Object.assign({},arrString);
  console.log(newArrayString)
  
  // task 20: for the boolean array below, check the output of this array is true or false
  const arrBoolean = [true, true, false];
  result = arrBoolean.every(function(item){
    return (item ===true);
  })
  console.log(result)

  
  // task 21: write an object using setter & getter to add new value and get value. key word (Getter, setter)
const user ={
  user1: "Lan",
  user2: "Hoa",
  user3: "Tu",
  get otherUser(){
    return this.user3;
  }
};
console.log(user.user3)

const family ={
  member1: "Father",
  member2: "Mother",
  member3: "Brother",
set otherUser(nameUser){
  this.member3 = nameUser;
}
};
family.otherUser ="Sister";
console.log(family.member3)
  // task 22: Concatenate the data string into the variables below. expected results. => 'name: user - age: 21 - class: classAbc'
  let name = "user";
  let age = 21;
  let className = "classAbc";
  var result=[];
  result = "name: "+name +" - " +"age: " +age +" - "+"class: " +className
  console.log(result)
  
  // task 23: for the array number below, sum the array: result = 45( not use loop);
  arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  result = arrNumber.reduce(function(result, number){
    return result+ number;
  });
  console.log(result)
