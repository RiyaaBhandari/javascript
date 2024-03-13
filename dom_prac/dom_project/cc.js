const btn=document.querySelectorAll(".btn");
const body=document.querySelector("body");

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
      if(e.target.id==="gray"){
        body.style.backgroundColor="gray"
      }else if (e.target.id==="yellow") {
        body.style.backgroundColor="yellow"
      }else if (e.target.id==="green"){
        body.style.backgroundColor="green"
      }else{
        body.style.backgroundColor="blue"
      }
    })
})