console.log("page loaded...");

function over(element){
    element.play();
    element.muted=true;
}

function off(element){
    element.pause();
    element.load();
}