{
    console.log('%cApp Started...', "color:white; font-size: 24px;");   

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

   // step 1 hook into the spot (element) on the page
   let jumbotron = document.getElementsByClassName("jumbotron")[0];
  

   // step 2 create a new element
   let newParagraph = document.createElement("p");
   
   // step 3 configure the new element
   newParagraph.textContent = title;

   // step 4 attach the new element
   jumbotron.appendChild(newParagraph);
} 
// Adding content to biopage
(function(){
  function Strings()
  {
      let h1String = "Aakriti Gupta";
      document.getElementsByTagName("h1")[0].innerHTML = h1String;
      let pString = `Something about me:
I'm student of Health Informatics Technology program at Centennial College.`;
      document.getElementsByTagName("p")[0].innerHTML = pString;
 
  }
  console.log("reached here...");
  window.addEventListener("load", Strings);
  

})();


/*Javascript for Project page*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
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