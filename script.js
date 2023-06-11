var counter=1;
setInterval(function(){
document.getElementById('radio' + counter).checked=true;
counter++;
if(counter>5)
{
    counter=1;
}},5000);
var counterf=1;
setInterval(function(){
    document.getElementById('radio' + counterf+'f').checked=true;
    counterf++;
    if(counterf>5)
    {
        counterf=1;
    }},5000);
    const navigation_bar = document.querySelector(".navigation-bar");
    let lastScrollY=window.screenY;
    let hover= false
    window.addEventListener("scroll",  () => {
        if(lastScrollY<window.scrollY)
        {
            console.log("we are going down");
            navigation_bar.classList.add("nav--hidden");
        }
        else{
    
            console.log("we are going up");
            navigation_bar.classList.remove("nav--hidden");
        }
        lastScrollY=window.scrollY;
    });