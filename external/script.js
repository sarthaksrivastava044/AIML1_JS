function checkArmstrong() {
    let num = document.getElementById("num").value;

    if (num === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number!";
        return;
    }

    let originalNum = num;
    let digits = num.length;
    let sum = 0;

    for (let digit of num) {
        sum += Math.pow(Number(digit), digits);
    }

    let result = document.getElementById("result");

    if (sum == originalNum) {
        result.innerHTML = originalNum + " is an Armstrong Number";
        result.style.color = "green";
    } else {
        result.innerHTML = originalNum + " is NOT an Armstrong Number";
        result.style.color = "red";
    }
}