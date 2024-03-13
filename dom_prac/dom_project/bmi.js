const form=document.querySelector("form");
//this use will give you an empty value
// const height=parseInt(document.querySelector("#height").value);
form.addEventListener("submit",(e)=>{
   e.preventDefault()
   //const btn=document.querySelector("#btn");
   const height=parseFloat(document.querySelector("#height").value);
   const weight=parseFloat(document.querySelector("#weight").value);
   const results = document.querySelector("#results");

   if(height===''|| height<=0 || isNaN(height)){
     results.innerHTML="please give a valid height"
   }
   if(weight===''|| weight<=0 || isNaN(weight)){
    results.innerHTML="please give a valid weight"
  }
  else{
    const calculate= (weight/(height**2)).toFixed(2)
    if(calculate < 18.06){
        results.innerHTML=`your bmi is: ${calculate} and you are Under Weight`
    }
    if(calculate === 18.6 || calculate > 18.6 || calculate < 24.9 || calculate === 24.9){
        results.innerHTML = `your bmi is: ${calculate} and you are Normal Weight`
    }
    else{
        results.innerHTML=`your bmi is: ${calculate} and you are Overweight`
    }
  }
})