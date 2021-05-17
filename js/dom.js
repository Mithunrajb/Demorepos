function openDiv(){
    document.getElementById("div1").style.display="block"  // document is a DOM function
    document.getElementById("div1").style.fontSize="50px"
    

}
function addContent(){

    document.getElementById("p1").innerText="HTML Javascript"
    document.getElementById("p2").innerHTML="HTML<span style='color:yellow'>Javascript"
}

function getData(){
    //alert("function called")
    //document.getElementById("username").value
    alert(document.getElementById("username").value) //  input field has value inside
}

function setData(){
 
   document.getElementById("username").value = "Mithun"//  input field has value inside
}

function addData(){
 let x=document.getElementById("value1").value
 let y=document.getElementById("value2").value
    document.getElementById("result").value= parseFloat(x)+parseInt(y) // parseFloat & parseInt converts string to text
 }

 let str="123" 
 let i=parseInt(str) // converting string to number. Str remains as string
 console.log(i,typeof i)
 let d=i.toString() // converting number to string
 console.log(d,typeof d)
 let s= true
 let b= s.toString()// converting boolean to string
 console.log(b,typeof b)

 let a="hello"
 console.log(a,typeof a)
 let a1=String("hello") // Declaring using function constructor called string. It is also immutable
 console.log(a,typeof a)
 console.log(a===a1)


 let m="Good"
 m+"Morning" 
console.log(m) // m is immutable so only "good" will be displayed

let obj=new String("hello") // keyword new declares obj as an object
console.log(obj, typeof obj)

let obj1=new Number(123) // "Number" is called as function constructors
console.log(obj1, typeof obj)


let s1=obj.toUpperCase() // toUppercase is a property of obj
console.log(s1) 
console.log(obj.indexOf("l"))// finding index number of "l" in "hello"
console.log(obj.indexOf("l",3)) // finding index number of "l" in "hello" from the 3rd index
console.log(obj.lastIndexOf("l")) // similar to finding the index from the last character
console.log(obj.charAt(2)) // character at index 2
let obj2="  hello world  "
console.log(obj2,obj2.length) // length property shows the char length of the object
console.log(obj2.trim(),obj2.trim().length) // .trim() function is used to delete the white spaces at begin and end of text
console.log(obj2.indexOf("h"))
console.log(obj2.substr(3)) // 3rd index is deleted
console.log(obj2.substr(3,5)) // 3rd to 5th index character is shown
console.log(obj2.substring(3,5))//3rd to 4th index character is 
console.log(obj2.startsWith("he")) // gives a boolean true if it starts with "he"
console.log(obj2.endsWith("world  "))