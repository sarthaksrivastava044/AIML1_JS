// var person={
//     name:"Jeet",age:50,city:"Ghaziabad"
// };

// for(var key in person){
//     console.log(key,person[key]);
// }

// function add(a,b){
//     return a+b;
// }

//When the function is passed as an argument they are considered as Higher Order Funcitons. Ex: map(),filter()

// Map
// var numbers=[1,2,3,4];
// var result = numbers.map(n=>n*2);
// console.log(result);

// Filter
// var numbers =[10,20,30,40];
// var result=numbers.filter(n=>n>20);
// console.log(result);

//Reduce
// var numbers=[10,20,30];
// var sum= numbers.reduce((total,n)=>total+n,0);
// console.log(sum);

//------------------------------------------------

//PROMISES
//Promise States: Pending, Fulfilled, Rejected

// var promise=new Promise((resolve, reject)=>{
//     let success=true;
//     if(success)
//         resolve("Data Loaded");
//     else
//         reject("Error Occured");
// });
// promise.then(result=>console.log(result)) //then wokrs when promise is resolve otherwise catch works
// .catch(error=>console.log(error));

//----------------------------------------------------

//async/await

// async function getData(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data =await response.json();
//     console.log(data);
// }
// getData();

//-----------------------------------------------

//fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response =>response.json())
// .then(date =>console.log(data))
// .catch (error =>console.log(error));

//-------------------------------------------------

//error handling

// try{
//     var x=y+10;
// }catch(error){
//     console.log(error.message);
// }

//local storage 
//stores in form of string
//store data 
localStorage.setItem("name","jeet");
//retreive data
var name=localStorage.getItem("name");
//remove data
localStorage.removeItem("name");

// store object
var user={name:"jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));
//retrieve item 
var data=JSON.parse(localStorage.getItem("user"));
console.log(data.name);