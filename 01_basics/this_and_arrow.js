// this keyword refers to current context

const user={
    username: "riya",
    price: 999,

    welcomemsg:function(){
         console.log('${this.username},welcome to website');
         console.log(this);
    }
}
//user.welcomemsg()
//user.username="siya"
//user.welcomemsg()

//console.log(this);

function chai(){
    console.log(this)
}

chai()
//it will print undefine because we can not use this keyword in fuction


//----------------Arrow Fuction-----------------------

//const cha = ()=>{
//    let usern="yuo"
//    console.log(this.usern)
//}

//cha()

//Explicit return
const twosum=(num1,num2)=>{
    return num1+num2
}
console.log(twosum(3,4))

//implicit return means you not need to write return keyword
//if we use curly braces{} then use of return keyword is must
//or you can write like the below one and it has most usecase in React
const add=(num1,num2) => (num1+num2)
console.log(add(5,6))

//how to return Object

const addOne=(n1,n2)=>({username:"riya"})
console.log(addOne(5,6))