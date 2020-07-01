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
let h1Text = "Aakriti Gupta";
document.getElementById("h1Text").innerHTML = h1Text;
let biographyText1 = 
`I'm student of Health Informatics Technology program at Centennial College.
 I am always excited to learn and implement new things in life.
 I learn from my experiences.
 My Background:
 Bachelors in Dental Surgery (2009-2014).
 Masters in Hospital Administration(2014-2016).
 Worked for 2.5 years as Quality and Safety Executive

 My Hobbies:
 I am an Indian Classical Dancer and a vocalist.
 I love travelling and exploring new cuisines.
 I like watching movies. My favourite genres are- Horror, Thriller and Comedy.

 My Favourite Book:
 One book that changed my lifeand inspired me is The Secret by Rhonda Bryne

 My Favourite Quote:
 "Live in the moment, Live in the breath"
 `
document.getElementById("biographyText1").innerText = biographyText1;
 
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

/*Javascript for Project page*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Adding the "show" class (display:block) to the filtered elements, and removing the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// For showing filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// For Hiding elements that are not selected
function RemoveClass(element, name) {
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

// Added active class to the current button 
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}