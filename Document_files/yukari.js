var yukari=document.getElementsByClassName("yukari_cik")[0];
//console.log(yukari);
window.addEventListener("scroll",function(){
    const mesafe=window.scrollY;//yukaridan olan uzakliği veriyor
  //  console.log(mesafe);
    if(mesafe > 300) {
        yukari.classList.add("goster");
    }  else{
            yukari.classList.remove("goster");
    }
});

yukari.addEventListener("click",function(){
    window.scrollTo(0,0);
    
});
yukari.addEventListener("mousemove",function(){
    yukari.innerHTML="&uarr;";
});
yukari.addEventListener("mouseout",function(){
    yukari.innerHTML="Top";
});