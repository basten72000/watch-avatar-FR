

document.body.onload=function(){

    ep=16;
    p=0;

    content=document.getElementsByClassName("content");
    d=document.getElementById("d");
    g=document.getElementById("g");

    
    
    
    hideSliderButton();





d.onclick=function(){
        
    if(p>-ep+1)
        p--;
    content[0].style.transform="translate("+1200*p+"px)";
    hideSliderButton()
    console.log(p)

}
g.onclick=function(){

    if(p<0)
        p++;
    content[0].style.transform="translate("+1200*p+"px)";
    hideSliderButton()

} 
 
}
function hideSliderButton(){
    if(p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";

        if(p==-ep+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
}



