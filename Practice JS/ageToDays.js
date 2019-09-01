var age=prompt("Enter your age");
var leap=age/4;
var nonleap=age-age/4;
var days=nonleap*365+leap*366;
alert("Your age in days is "+days);