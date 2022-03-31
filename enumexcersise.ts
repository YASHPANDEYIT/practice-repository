enum months{'jan'=1,'feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec'}
let month:number=months.aug
if (month<=3||month<6)
    console.log("Yes! It is spring " +month)
if (month<6||month<9)
     console.log("It's summer, who wants ice cream?! " +month)

if (month<8&&month<12)
    console.log("I am enjoying autumn, aren't you? " +month)
