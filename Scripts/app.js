/* File Name- COMP125- Assignment02
* Author's Name- Aakriti Gupta
* Website Name- Personal Biography
* Description- This file consists of functionality and text contents of three webpages 
 index page(biography), contact page and projects page. 
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
if(document.getElementById("welcomeMessage"))  
{let welcomeMessage = "Welcome To My Page";
document.getElementById("welcomeMessage").innerHTML = welcomeMessage;
}
if(document.getElementById("biographyText"))
{let biographyText = 
`I'm student of Health Informatics Technology program at Centennial College.
 I learn from my experiences.
 My Aim is to become a successful Healthcare IT Professional.
 `;
document.getElementById("biographyText").innerText = biographyText;
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



/*Adding content to the Project page*/
/*Adding content under Main*/
mainProject();
function mainProject(){
if(document.getElementById("projectHeading"))
{
  let projectHeading = "MY PROJECTS";
 document.getElementById("projectHeading").innerHTML = projectHeading;
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
I have lately discovered this talent inside me and soon going to open my own instagram account.`;
document.getElementById("projectDescription").innerText = projectDescription;
}
}
/*Adding content to Project 1*/
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
if(document.getElementById("danceName4"))
{
  let danceName4 ="Bollywood Dance";
  document.getElementById("danceName4").innerHTML = danceName4;
}
if(document.getElementById("danceText4"))
{
  let danceText4 ="Later or sooner I intend to open my dancing school.";
  document.getElementById("danceText4").innerHTML = danceText4;
}
}
/*Adding content to Project 2*/
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
if(document.getElementById("dogName4"))
{
  let dogName4 ="Meet Brownie";
  document.getElementById("dogName4").innerHTML = dogName4;
}
if(document.getElementById("dogText4"))
{
  let dogText4 ="Every dog deserves to be loved.";
  document.getElementById("dogText4").innerHTML = dogText4;
}
}
/*Adding content to Project 3*/
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
  if(document.getElementById("photoName4"))
  {
    let photoName4 ="Lush Green";
    document.getElementById("photoName4").innerHTML = photoName4;
  }
}

