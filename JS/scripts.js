function changeText(){
    var textsArray = ["1","2", "3", "4", "5", "6"];
    var number = getRandomNumberBetween(0,textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = 'You can move forward <span style="color: red">' + textsArray[number] + "</span> steps.";
}



function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
