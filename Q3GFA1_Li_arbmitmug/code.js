var nme = prompt("Please enter your name: ");
var height = prompt("Please enter your height (in): ");
var height1;
var height2;
var weight = prompt("Please enter your weight(kg): ", "");
var weight1;
var decimal;

decimal = height%12;
height1 = ((height/12));
height3 = height1%1;
height=height1-height3;
weight = weight * 2.20462262;
weight1 = weight * 100;
weight1 = (weight1%1)/100;
weight = weight - weight1;

alert("Name: "+nme +"\nHeight: "+ height + "'" + decimal + "\"" +"\nWeight: "+ weight + "lbs") ;

var firstname = prompt("First Name: ");
var lastname = prompt("Last Name: ");
var age = prompt("Birth Year: ");

age = 2024 - age;

document.getElementById("Hello "+ firstname+ ""+lastname +"! How does it feel to be "+age+" years old?")

