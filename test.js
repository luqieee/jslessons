var birthday = new Date(1992, 08, 20, 4, 15, 25);
var birthday2 = new Date(1992, 08, 20, 4, 15, 25);

console.log(birthday.getMonth());

console.log(birthday.getFullYear());

console.log(birthday.getDate());

console.log(birthday.getDay());

console.log(birthday.getHours());

console.log(birthday.getTime());


if(birthday == birthday2){

    console.log("equal");

} else{

    console.log("not equal");

}

if(birthday.getTime() == birthday2.getTime()){

    console.log("equal");

} else{

    console.log("not equal");

}
