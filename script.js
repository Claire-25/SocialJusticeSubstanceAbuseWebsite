/*
// Make the DIV element draggable:
dragElement(document.getElementById("alcoholBox"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  */

 // Drag functionality for Alcohol Info Box
 dragElement(document.getElementById("alcoholBox"));

 function dragElement(element) {
     var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
     
     if (document.getElementById(element.id + "header")) {
         document.getElementById(element.id + "header").onmousedown = startDragging;
     } else {
         element.onmousedown = startDragging;
     }

     function startDragging(e) {
         e = e || window.event;
         e.preventDefault();
         initialX = e.clientX;
         initialY = e.clientY;
         document.onmouseup = stopDragging;
         document.onmousemove = dragElement;
     }

     function dragElement(e) {
         e = e || window.event;
         e.preventDefault();
         currentX = initialX - e.clientX;
         currentY = initialY - e.clientY;
         initialX = e.clientX;
         initialY = e.clientY;
         element.style.top = (element.offsetTop - currentY) + "px";
         element.style.left = (element.offsetLeft - currentX) + "px";
     }

     function stopDragging() {
         document.onmouseup = null;
         document.onmousemove = null;
     }
 }

/*
var welcomeScreen = document.querySelector("#alcoholBox")

function closeWindow(element){
 element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}
  */