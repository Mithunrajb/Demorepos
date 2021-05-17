/*names=["Anna","Anu","Bibin","Rachel"]
let itemlist=[]
for(let name of names){
    itemlist+=names
}
document.getElementById("list").innerHTML=itemlist
*/
/*function addPara(){

    document.getElementById("mydiv").innerHTML='<p>HTML Javascript</p>'
   
}

function addPara2()


{

    let mypara=document.createElement("p")
     mypara.innerText="Welcome"
     mypara.id="p1"
     mypara.style="color:red"
     document.getElementById("mydiv").appendchild(mypara)
   
}
*/
/* 
let data=["a","b","c","d","e"]
for(let letters of data){

let myletters=document.createElement("li")
    myletters.innerText=letters
    document.getElementById("mydiv").appendchild(myletters)
}
*/

/* 
for (let i of data)
{
    let li=document.createElement("li")
    li.innerText=i
    let btn=document.createElement("button")
    btn.innerText="delete"
    let ind=data.indexOf(i)
    btn.onclick='remove(${ind})'
    document.getElementById("myarray").appendchild(li).appendchild(btn)

}

function remove(){
let parent=document.getElementById("myarray")
parent.removechild(parent.childNodes[index])

}
*/
let data=["a","b","c","d","e"]
for (let i of data)
{
    let li=document.createElement("li")
    li.innerText=i
    document.getElementById("myarray").appendChild(li)

}
/* To remove the elements displayed on an array
function remove(){
let parent=document.getElementById("myarray")
parent.removeChild(parent.childNodes[0])

}
 To remove all the displayed array*/
function remove(){


    let parent=document.getElementById("myarray")
    parent.remove()
    
    }
// Arrow Functions  ()=>{}  --- function inside a function is called call back function . It ia a part of asynchronous scripting
    let num_arr=[10,12,33,35,27,28,32]

    num_arr.forEach((num)=>{console.log(num)})// foreach function takes a variable invoke the argument and appends the value and writes as a string/number
    let new_arr=num_arr.map((d)=>{return d**2}) // map function invokes the argument an returns the value to another array
    console.log(new_arr)

    //let new_arr1=num_arr1.map((d1)=>{return d1**3}) // map function invokes the argument an returns the value to another array
   // console.log(new_arr1)

    let new_arr3=num_arr.map((d2)=>{
        if(d2%2!=0){
            return d2
        }
    }) // map function invokes the argument an returns the value to another array. Array length will be the same
    console.log(new_arr3)

    let new_arr4=num_arr.filter((d2)=>{
        if(d2%2!=0){
            return d2
        }
    }) // filter function invokes the argument an returns the value to another array. Only the filtered values are manipulated
    console.log(new_arr4)

    let new_arr5=num_arr.reduce((x,y)=>{
        console.log("x=",x)
        console.log("y=",y)
            return x+y
        }) // x and y values will be manipulated and stored in x and then operation is continued to next index until end
    console.log(new_arr5, typeof new_arr5) 

    console.log("started...")
    function asynctest(){
        setTimeout(()=>{
            console.log("inside asyn fn..")
        },5000)
    }
    asynctest()
    console.log("finished...")