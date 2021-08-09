var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close")[1];
var modal2 = document.getElementById("myModal2");
var btn2= document.getElementById("myBtn2");
// var si= document.getElementById("si");
// var su= document.getElementById("su");
var span2 = document.getElementsByClassName("close")[2];
var count=0;

btn.onclick = function() {
  modal.style.display = "block";
  count=1;
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) 
{
  if (event.target == modal && count==1) {
    modal.style.display = "none";
  }
  else if(event.target == modal1 && count==0) {
    modal1.style.display = "none";
  }
  else if(event.target == modal2 && count==3) 
  {
    modal2.style.display = "none";
  }
}
btn1.onclick = function() {
  modal1.style.display = "block";
  count=0;
}

span1.onclick = function() {
  modal1.style.display = "none";
}
si.onclick = function() {
  modal2.style.display = "block";
  count=3;
}
su.onclick = function() {
  modal2.style.display = "block";
  count=3;
}

// btn2.onclick = function() {
//   modal2.style.display = "block";
//   count=3;
// }
span2.onclick = function() 
{
  modal2.style.display = "none";
}
myBtn13.onclick = function() {
  modal1.style.display = "none";
  modal.style.display = "block";
  count=1;
}
//myBtn2.addEventListener("click",myFunction);
//myBtn2.addEventListener("click",f2);
function postSuc(){
  alert("Thank You for your valuable post,Hope it is insightful!!!");
}
function myFunction(){
  
  alert("Please sign in first!!!");
  //document.getElementById("myBtn1").click();
 
     
  
}
function f2(){
  document.getElementById("myBtn1").click();
}

