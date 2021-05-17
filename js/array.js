// array is a collection of datas like object used to store values//

let arr=[] // declaring empty array
console.log(arr, typeof arr) 
let arr1=new Array() // declaring array second method
console.log(arr1,typeof arr1)
let names=["Anna","Anu","Bibin","Rachel"] // declaring array with values
console.table(names) // displayed as table
names[0]="Arun" // Reassigning values at 0 index
console.table(names)
names[6]="Monica" // assigning values at 0 index
console.table(names)
console.log("length",names.length)
names.push("Don") // assigning value to the last index
console.table(names)
names.pop() // Removing value from the last index
console.table(names)
names.shift() // Removing value from the first index 
console.table(names)
names.unshift("Linu")// assigning value to the first index
console.table(names)

for(let i=0;i<10;i++){  // for loop standard
    console.log("hello",i)
}
for(let index=0;index<10;index++){
    console.log("index=",index," ", names[index])
}

for(let name of names){ // for-each loop similar to for loop
    console.log(name) // name is a variable which stores values  inside name
}
for(let index in names){
    console.log(index)
    console.log(names[index])
}
console.log(names)
names.splice(4) // values from index 4 gets removed
console.log(names)
names.splice(1,2) // values upto 2 counts starting from index 1 upto 2 counts gets removed
console.log(names)
console.log(names.splice(1))
console.log(names)
names.splice(1,1,"Renu")// used to insert new values to the index
console.log(names)
console.log(names.indexOf("Renu"))


// converting words into array

let str="hey all welcome,guys"
let words=str.split(" ") // split by space
console.log(words) 
let items=str.split(",") // split by comma
console.log(items) 

// to convert array to strings

console.log(items.join(","))


let numbers=[10,23,49,50,80,40]
console.log(numbers.length)
numbers.splice(2,2)
console.log(numbers)
console.log(numbers[10])
numbers[10]="hello"
console.log(numbers)
console.log(numbers[7])
numbers.push(90,100,400,500)
console.log(numbers)

