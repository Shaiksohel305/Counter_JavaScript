count=0
function inc(){
    count=count+1;
    var spam1=document.querySelector("span");
    spam1.innerText=(count);
}
function dec(){
   if(count>0){
    count=count-1;
   }else{alert("Your Count become  0");}
    var spam1=document.querySelector("span");
    spam1.innerText=count;
}
function reset(){
    if(count>=1){
        count=count=0;
    }
    var spam1=document.querySelector("span");
    spam1.innerText=count;
}