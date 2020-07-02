/* File Name- COMP125- Assignment02
* Author's Name- Aakriti Gupta
* Website Name- Biography
* Description- This project consists of three webpages 
consisting of a biography page(home), contact page and projects page. 
*/

{
    console.log('%cAssignment02', "color:white; font-size: 24px;");   

   let title = document.title;

   title = title.toLowerCase();

   console.log(`The title of the page is ${title}`);

   let navAnchors = document.querySelectorAll("li a");

   for (const anchor of navAnchors) 
   {

    let anchorString = anchor.getAttribute("href");
    anchorString = anchorString.substr(0,anchorString.length-5);

    if((title === "home") && (anchorString === "index") || (title === anchorString))
    {
        anchor.className = "nav-link active";
    }
   }

} 
// Adding content to biopage
bioContent();
function bioContent(){
if(document.getElementById("myName"))  
{let myName = "Aakriti Gupta";
document.getElementById("myName").innerHTML = myName;
}
if(document.getElementById("biographyText1"))
{let biographyText1 = 
`I'm student of Health Informatics Technology program at Centennial College.
 I am always excited to learn and implement new things in life.
 I learn from my experiences.

 My Background:
 Bachelors in Dental Surgery (2009-2014).
 Masters in Hospital Administration(2014-2016).
 Worked for 2.5 years as Quality and Safety Executive

 My Aim:
 To become a successful Healthcare IT Professional.
 I have dream of opening my own Dancing school named "NatyaKriti".

 My Hobbies:
 I am an Indian Classical Dancer and a vocalist.
 I love travelling and exploring new cuisines.
 I like watching movies. My favourite genres are- Horror, Thriller and Comedy.

 My Favourite Book:
 One book that changed my life and inspired me is "The Secret" by Rhonda Bryne

 My Favourite Quote:
 "Live in the moment, Live in the breath"
 `;
document.getElementById("biographyText1").innerText = biographyText1;
}
}
/*Javascript for Contact page*/
function validateForm()
    {
        let contactForm = document.forms[0];

        if(contactForm)
        {
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => 
            {
                if(firstName.value.length < 2)
                {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => 
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });



            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                console.log("Submit Button Clicked");
            });
        }
        return false;
    }

/*Javascript for Project Page*/
filterSelection("all"); // Executing the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Adding the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*Adding content to the Project page*/
/*Adding content under Main*/
mainProject();
function mainProject(){
if(document.getElementById("projectHeading"))
{
  let projectHeading = "These are my projects";
 document.getElementById("projectHeading").innerHTML = projectHeading;
}
if(document.getElementById("projectHeading1"))
{
 let projectHeading1 = `Click on "show all" to view my projects`;
 document.getElementById("projectHeading1").innerHTML = projectHeading1;
}
/*Description of all the projects*/
if(document.getElementById("projectDescription"))
{
let projectDescription = 
`Project 1- Dancing
I am dancing since the age of 5 years and that has being my passion all along till now.

Project 2- Rescuing Dogs
This is an on-going project which I started with my father and brother when I was in my homecountry India.

Project 3- Photography
I have lately discovered this talent inside me and soon going to open my own instagram account.
I am yet to explore this side of mine but I am hopeful of experiencing some great things on my way.`;
document.getElementById("projectDescription").innerText = projectDescription;
}
}
/*Adding content for Project 1*/
Project1();
function Project1() {
if(document.getElementById("danceName1"))
{
let danceName1 ="Indian Classical Dance";
document.getElementById("danceName1").innerHTML = danceName1;
}
if(document.getElementById("danceText1"))
{
let danceText1 ="I am an Award-Winner Indian Classical Dancer.";
document.getElementById("danceText1").innerHTML = danceText1;
}
if(document.getElementById("danceName2"))
{
  let danceName2 ="Indian Folk Dance";
  document.getElementById("danceName2").innerHTML = danceName2;
}
if(document.getElementById("danceText1"))
{
let danceText2 ="I have participated in many competitions and won many awards and appreciations.";
document.getElementById("danceText2").innerHTML = danceText2;
}
if(document.getElementById("danceName3"))
{
  let danceName3 ="Indo-Contemporary Dance";
  document.getElementById("danceName3").innerHTML = danceName3;
}
if(document.getElementById("danceText3"))
{
  let danceText3 ="I have even raised money by participating in charity functions.";
  document.getElementById("danceText3").innerHTML = danceText3;
}
}
/*Adding content for Project 2*/
Project2();
function Project2() {
if(document.getElementById("dogName1"))
{
  let dogName1 ="Meet Cookie";
  document.getElementById("dogName1").innerHTML = dogName1;
}
if(document.getElementById("dogText1"))
{
  let dogText1 ="I have rescued many dogs, provided them safe shelter and food.";
  document.getElementById("dogText1").innerHTML = dogText1;
}
if(document.getElementById("dogName2"))
{
  let dogName2 ="Meet Peanut";
  document.getElementById("dogName2").innerHTML = dogName2;
}
if(document.getElementById("dogText2"))
{
  let dogText2 ="Luckily able to search homes for all the rescued ones.";
  document.getElementById("dogText2").innerHTML = dogText2;
}
if(document.getElementById("dogName3"))
{
  let dogName3 ="Meet Oreo";
  document.getElementById("dogName3").innerHTML = dogName3;
}
if(document.getElementById("dogText3"))
{
  let dogText3 ="Taking measures so that all these precious souls can get a good and happy life.";
  document.getElementById("dogText3").innerHTML = dogText3;
}
}
/*Adding content for Project 3*/
Project3();
function Project3() {
  if(document.getElementById("photoName1"))
  {
    let photoName1 ="The Burning Desire";
    document.getElementById("photoName1").innerHTML = photoName1;
  }
  if (document.getElementById("photoName2")) {
    let photoName2 = "Into the Wild";
    document.getElementById("photoName2").innerHTML = photoName2;
  }
  if(document.getElementById("photoName3"))
  {
    let photoName3 ="Royality";
    document.getElementById("photoName3").innerHTML = photoName3;
  }
}

