const myProblem = () => {
    var answ = document.getElementById("in1").value;
    if (answ == "x^3 + 11x^2 + 26x + 16") {
        return "Good Job!";
    }   else
        return "Try Again!"
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    return "x^3 + 11x^2 + 26x + 16"; 
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var answ = document.getElementById("in2").value;
    if (answ == "x^3 + 11x^2 + 31x + 21") {
        return "Good Job!";
    }   else
        return "Try Again!"
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    return "x^3 + 11x^2 + 31x + 21"; 
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}