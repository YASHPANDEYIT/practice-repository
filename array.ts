let numArray:any = [105,5,293,153,17,2,1,371,95,407];
var numbers:any
var sum:any
var temp:any
var remainder:any
for(let numbers in numArray)
{
    temp=numbers
while (temp > 0) {
    
     remainder = temp % 10

    sum += remainder * remainder * remainder

 
}

    if(sum==numbers)
    {
        console.log("number is armstrong" +numbers)
    }
    else
     {
        console.log("number is  not armstrong" +numbers)
    }
    
    
}