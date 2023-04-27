
let arrowDown = true

function showSubNav(){
    if(arrowDown === true){
        document.getElementById("subNav").style.display="block";
        document.getElementById("arrow").className="fa fa-caret-up";
        arrowDown = false}
    else{
        document.getElementById("subNav").style.display="none";
        document.getElementById("arrow").className="fa fa-caret-down";
        arrowDown = true
    }
}

function arrowState(){
    return arrowDown
}

export default showSubNav