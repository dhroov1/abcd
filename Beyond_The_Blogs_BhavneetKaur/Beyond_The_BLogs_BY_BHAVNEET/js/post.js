var like=0;
var flag=0;
function newP1(){
    var cond=1;
  sessionStorage.setItem("cond", cond);
  
    var newc1=document.getElementById("desc1").innerHTML; 
  console.log(newc1);
  
  sessionStorage.setItem("newc1", newc1);
  var newt1=document.getElementById("blogTitleNew").innerHTML; 
  console.log(newt1);
  sessionStorage.setItem("newt1", newt1);
  var cond=1;
  sessionStorage.setItem("cond", cond);
  
  
  
  window.open('bloglist.html','_self');
  
  }
function changeText()
{
if(flag==0)
{
     var x=document.getElementById("temp").innerHTML;
    var title=document.getElementById('blogTitleNew').innerHTML;
    document.getElementById('blogTitleNew').style.display="none";
    document.getElementById('titleArea').value=title;
    document.getElementById('titleArea').style.display="block";
    
    document.getElementById("text").innerHTML='Save';
      //document.getElementById("text").addEventListener('click',newP1);
    document.getElementById("text2").innerHTML=x;
    
    var desc=document.getElementById('desc1').innerHTML;
    document.getElementById('textarea').value=desc;
    document.getElementById('desc1').style.display="none";
    document.getElementById('textarea').style.display="block";
    document.getElementById("textarea").style.width="95%";
    document.getElementById("textarea").style.height="260px";
    //document.getElementById("text").addEventListener('click',newP1);
    flag=1;
}
else
{
    var d=document.getElementById("temp2").innerHTML;
    document.getElementById("text").innerHTML='Done';
    document.getElementById("text2").innerHTML=d;
    var title1=document.getElementById('titleArea').value;
    document.getElementById('blogTitleNew').innerHTML=title1;
    document.getElementById('titleArea').style.display="none";
    document.getElementById('blogTitleNew').style.display="block";
    var desc111=document.getElementById('textarea').value;
    document.getElementById('desc1').innerHTML=desc111;
    document.getElementById('desc1').style.display="block";
    document.getElementById('textarea').style.display="none";
    document.getElementById("text").addEventListener('click',newP1);
    flag=0;
}
}
function liker1()
{
    like++;
document.getElementsByClassName('likeText')[0].innerHTML="Liked!";
if(like==1)
{
    document.getElementById('like6').innerHTML=like+" person likes this!";
}
else
{
    document.getElementById('like6').innerHTML=like+" people have liked this!";
}
document.getElementById('commentBox').style.display="block";
}
function cmnt()
{
   
    var p=document.getElementById('commentArea').style.display="block";
    var e=document.getElementById('commentArea').innerHTML;
    var data=document.getElementById('cmntText').value;
    document.getElementById('commentArea').innerHTML="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+data+"</p>"+e;
    document.getElementById('cmntText').value=" ";
    //document.getElementById('cmntText').innerHTML=" ";
    
}

  
  