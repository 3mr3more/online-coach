
const female =document.getElementById("flexRadioDefaultfemale").value;
const male =document.getElementById("flexRadioDefaultmale").value;
var step1 = document.getElementById("step1");
var step2 =document.getElementById("step2");
var step3 = document.getElementById("step3");

function replaceTag(){
    var weight =document.getElementById("Weight").value;
    var height =document.getElementById("Height").value;
    calories_burned(weight,height);
}
function replace(){
    step2.style.display="none";
    step3.style.display="block";

}
function back1(){
    step2.style.display="none";
    step1.style.display="block";
}
function back2(){
    step3.style.display="none";
    step2.style.display="block";
}
//calculator calo
function  calories_burned (w,h){
    var step = document.getElementById("Steps").value;
    var distance = document.getElementById("Distance").value;
    var time = document.getElementById("Time").value;
    var calori = document.getElementById("calori");


}
var submit = document.getElementById("sub");
submit.addEventListener("click",(event)=>{
    event.preventDefault();

})

