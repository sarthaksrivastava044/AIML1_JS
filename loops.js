// var count;
// document.write("starting loop"+"<br>")
// for(count=1;count<=10;count++){
//     document.write("currentcount : " + count)
//     document.write("<br>")
// }
// document.write("loop ended")

const person ={
    fname:"john",
    lname:"doe",
    age:25
}
for(let x in person){
    console.log("person details: " + x + ":" + person[x])
}
for(let x in person){
    console.log("person details: " + x + ":" + person.x)
}