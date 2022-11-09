const sections =document.querySelectorAll('section');
const bubble = document.querySelectorAll('.bubble');
const gradients = [
    "linear-gradient(to right top,#f46b45,#eea849)",
    "linear-gradient(to right top,#005c97,#363795)",
    "linear-gradient(to right top,#e53935,#e35d5b)",
    "linear-gradient(to right top,#e53935,#e35d5b)"

];
const options = {
    threshold:0.7
};
let observer = new IntersectionObserver(navCheck,options);

function navCheck(entries){
    entries.forEach(entry => {
        //console.log(entry);
        
        const className = entry.target.className;
        //console.log(className)
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        //console.log(activeAnchor)
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();    
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        console.log(directions)
        if(entry.isIntersecting){
            bubble[0].style.setProperty('left', `${directions.left}px`);
            bubble[0].style.setProperty('top', `${directions.top}px`);
            bubble[0].style.setProperty('width', `${directions.width}px`);
            bubble[0].style.setProperty('height', `${directions.height}px`);
        }
    })
}
sections.forEach(section=> {
    observer.observe(section);
});
var typed = new typed(".auto-type" , {
    string:["Enez","Akcan","Ben" ],
    typespeed: 150,
    backspeed: 150,
    loop:true
})