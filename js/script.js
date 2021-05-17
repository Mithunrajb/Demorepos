
console.log(w) // Global variable, but the value is no defined while hoisting
//console.log(k) // will return error
let k=100
let x=50
add()// add is being hoisted here
let z=20

function demo(){
    let x=100
    z=30
    console.log("demo function....")
    console.log("x insoide demoo",x)
    console.log("z insoide demoo",z)
}
var w="welcome"
console.log(k)
demo() // calls a function
console.log(x)
console.log(z)
function add(){
    let sum=k+x  // local variable
    console.log(sum)
}

function add(a,b){ // a and b are arguments. You can asiign values later
    let sum=a+b
    console.log(`inside add function ${sum}`)
}
add(1,2)
add(2,3)
add("100","30")

function add(a,b){ // a and b are arguments. You can asiign values later//
    let sum=a+b
    console.log("inside add function")
    return sum
}
let result=add(1,2)
console.log("result=", result) // 2 methods of returning value
console.log(add(3,4))
console.log(add(100,40))

function avg(m,n,l){ 
    return (m+n+l)/3
}

console.log("Average=",avg(3,4,5))

function greetings(){
    document.write(" Hello, good morning")
}

let f=function(){  // another method to invoke a function. Also called expression
    document.write(" Example for an anonymouos function")
}
f()

if(true){ // Var is not block-scoped
   var message="hello"
   let message2="Hi"
}
console.log(message)
console.log(message2)

