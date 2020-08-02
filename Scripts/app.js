
/* File Name- COMP125-Assignment 03
* Author's Name- Aakriti Gupta
* Student Number - 301103413
* Website Name- Mini Portfolio Site - JSON Data & AJAX Components
* File Description- This file provides the functionality to all the three webpages 
 index page(biography), contact page and projects page. 
*/
"use strict";
//------------CONSOLE DISPLAY--------------------------
displayOutput();
function displayOutput()
{
    console.log('%cAssignment03', "color:ivory; background-color:purple ;font-size: 24px;");   
   let title = document.title;
   title = title.toLowerCase();
   console.log(`The title of the page is ${title}`);
}

  //------------SETTING NAV DATA (HEADER AND FOOTER)---------------
function setNavData()
{
 //Calling the appropriate function to load header and footer based on the title of the page
    if (document.title == "BIOPAGE" || document.title == "CONTACT" || document.title == "PROJECTS") 
        {
           loadHeader();
           loadFooter();      
        }                        
}  
//--------------DISPLAY PAGE CONTENTS-----------------------
let xhrContent;
//This function reads the content from the paragraphs.json file  
function readParagraphs() 
{
    if ((xhrContent.readyState === 4) && (xhrContent.status === 200)) 
      {
          let MyContent = JSON.parse(xhrContent.responseText);
          let paragraphs = MyContent.paragraphs;
          paragraphs.forEach(function (paragraph) 
            {
                let paragraphElements = document.getElementById(paragraph.id);
                //Searches element ids and aligns them with suitable paragraphs in the html
                if(paragraphElements) 
                {
                     paragraphElements.innerHTML = paragraph.content;
                }               
            }, this);
      }
}
//This functions loads the content from the paragraph.json file to the html file
function loadContent()
    {
      xhrContent = new XMLHttpRequest();
      xhrContent.open("GET","Scripts/paragraphs.json",true);
      xhrContent.send(null);
      xhrContent.addEventListener("readystatechange",readParagraphs);
    }
function initialize() 
    { 
     //Calling loadContent function 
        loadContent();
    };
     //Loads the initialize function after loading all the html functions 
    window.addEventListener("load",initialize);

//--------------- HEADER--------------------------------
loadHeader();
function loadHeader()
{
  console.info("Header is loading...");
  // step 1 - Creates the XHR object
  let XHR = new XMLHttpRequest();

  // step 2 - Configures the message
  XHR.open("GET", "./Views/partials/header.html");

  // step 3 - Executes the request
  XHR.send();

  XHR.addEventListener("readystatechange", function()
  {
      if((XHR.readyState === 4) && (XHR.status === 200))
      {
          let header = document.getElementsByTagName("header")[0];

          let headerData = XHR.responseText;

          header.innerHTML = headerData;
      }
  });   
}
//--------------- FOOTER--------------------------------
loadFooter();
function loadFooter()
{
  console.info("Footer is loading...");

  // step 1 - Creates the XHR object
  let XHR = new XMLHttpRequest();

  // step 2 - Configures the message
  XHR.open("GET", "./Views/partials/footer.html");

  // step 3 - Executes the request
  XHR.send();

  XHR.addEventListener("readystatechange", function()
  {
      if((XHR.readyState === 4) && (XHR.status === 200))
      {
          let footer = document.getElementsByTagName("footer")[0];

          let footerData = XHR.responseText;
          footer.innerHTML = footerData;
      }
  });   
}  

