let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/Grey-wolf.jpg') {
      myImage.setAttribute('src', 'image/firefox2.png');
    } else {
      myImage.setAttribute('src', 'image/Grey-wolf.jpg');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('fidy');
    localStorage.setItem('fidy', myName);
    myHeading.textContent = 'dieu est grand, ' + myName;
  }
  if (localStorage.getItem('fidy')) {
    setUserName();
  } else {
   let storedName=localStorage.getItem('fidy');
   myHeading.textContent='dieu est grand,'+storedName;
    
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });