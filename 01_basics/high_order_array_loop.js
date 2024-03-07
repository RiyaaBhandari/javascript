//high order array loops

//for of loop

const arr=[1,2,3,4,5]

for (const num of arr){
    console.log(num);
}

const greet="greeting";
for(const g of greet){
    console.log(g);
}

//Maps
// map does not print duplicate value it always prints unique value
const map=new Map()
map.set('IN',"INDIA")
map.set('usa',"america")
map.set('usa',"america")
console.log(map)

//intresting syntax to print using for of loop
//for(const [key,value] of map){
    //console.log(key,":-",value);
//}

//----------------------------------------------------------------------------------
//object is not iterable using for of loop
//const myobj={
    //game: "abc",
    //version: "v12"
//}
//for(const [key,value] of myobj){
//    console.log(key,":-",value);
//
//}

//to iterate the object we can use "for in Loop"

const myobjt={
    js: "javascript",
    py: "python",
    rb:"ruby",
    java:"java language"

}
for (const key in myobjt){
    console.log(`${key} shortcut is for ${myobjt[key]}`);
}

//const programming=["js","rb","java","python"]

//for(const key in programming){
//    console.log(programming[key]);
//}

// for in loop for map----------------------------------------------------
//we can not use for in loop in javascript
const mapp=new Map()
map.set('IN',"INDIA")
map.set('usa',"america")
map.set('usa',"america")
console.log(mapp)

for(const key in mapp){
   console.log(key);
}

//for each looops---------------------------------------------

const programming=["js","rb","java","python"]

//programming.forEach( (val)=>{
//    console.log(val)
//})


//another way
//function print(item){
  //  console.log(item);
//}
//programming.forEach(print)

programming.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})

const mycode=[
    {
        language:"python",
        extension:"py"
    },
    {
        language:"ruby",
        extension:"rb"
    },
    {
        language:"javascript",
        extension:"js"
    }
]

mycode.forEach((item)=>{
    console.log(item.language)
})