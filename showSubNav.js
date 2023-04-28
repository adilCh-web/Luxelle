
let arrowDown = true

function showSubNav(){

    if(arrowDown === true){
        document.getElementById("subNav").style.animation = "fade_in_show 2s";
        document.getElementById("subNav").style.display="block";
        document.getElementById("arrow").className="fa fa-caret-up";
        arrowDown = false}
    else{
        document.getElementById("arrow").className="fa fa-caret-down";
        arrowDown = true
        console.log("fadeOut")
    }
       
    }



export default showSubNav