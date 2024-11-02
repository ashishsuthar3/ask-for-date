function nextpage(){
    window.location.href= "yes.html";
}


function movebtn(){
 var x = Math.random() * (window.innerWidth - document.getElementById("nobtn").offsetWidth);

 var y = Math.random() * (window.innerHeight - document.getElementById("nobtn").offsetHeight);

 document.getElementById("nobtn").style.left=`${x}px`;
 document.getElementById("nobtn").style.top=`${y}px`;


}

