//func
//get val and print val
function calculateBMI(){
const w=document.getElementById("Weight").value ;
const h=document.getElementById("Height").value ;
const bmi = w / (h/100 * h/100);
 document.getElementById("heading").innerHTML ="your BMI is"
 document.getElementById("bmi-output").innerHTML = bmi.toFixed(2);
  if(bmi < 18.5){
    document.getElementById("message").innerHTML = "Underweight";
  }
  else if(bmi > 18.5 && bmi < 24.9){
    document.getElementById("message").innerHTML = "Normal";
  }
  else{
    document.getElementById("message").innerHTML = "Overweight";
  }
}