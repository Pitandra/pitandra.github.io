const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/xdd.jpg") {
    myImage.setAttribute("src", "images/xdd2.jpg");
  } else {
    myImage.setAttribute("src", "images/xdd.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to our page, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to our page, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};