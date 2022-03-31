var numArray = [105, 5, 293, 153, 17, 2, 1, 371, 95, 407];
var numbers;
var sum;
var temp;
var remainder;
for (var numbers_1 in numArray) {
    temp = numbers_1;
    while (temp > 0) {
        remainder = temp % 10;
        sum += remainder * remainder * remainder;
    }
    if (sum == numbers_1) {
        console.log("number is armstrong" + numbers_1);
    }
    else {
        console.log("number is  not armstrong" + numbers_1);
    }
}
