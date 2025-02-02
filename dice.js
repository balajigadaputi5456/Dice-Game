var randomnumber=Math.floor(Math.random()*6)+1;

var randomddiceimg= "dice"+ randomnumber +".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomddiceimg);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomddiceimg2= "dice"+ randomnumber2 +".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomddiceimg2);

if(randomnumber>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 is the winner"+"&#128681";
}
else if(randomnumber2>randomnumber)
{
    document.querySelector("h1").innerHTML="Player 2 is the winner"+"&#128681";
}
else
{
    document.querySelector("h1").innerHTML="Refresh again ☺";
}