"use strict";
window.onload = function() {
  setTimeout(function() {
    preLoader.style.display = "none";
  }, 1000);

  

  
  
  //NAVBAR
  btnNav.addEventListener("click", function() {
    
    navBarMenu.style.transform = "translateX(0%)";
    
  });
  exitNavBtn.addEventListener("click", function() {
    navBarMenu.style.transform = "translateX(102%)";
  });
  //GALLERY JSON-AJAX
  getWebDesing();
  webDesing.addEventListener("click", getWebDesing);
  mobile.addEventListener("click", getMobile);
  webApps.addEventListener("click", getWebApps);
  portfolios.addEventListener("click", getPortfolios);
  setTimeout(function(){
      alert( `Bienvenido \nEsta web esta hecha solo como practica, la informacion y contenido no tiene ninguna validez ni sentido dentro de la misma,gracias por visitarla`
      )},1000)
  
  //REVIEWS
    setInterval(showRevOne,15000)
    setInterval(showRevTwo,18000)
    setInterval(showRevThree,20000)
  revLinkOne.addEventListener('click',showRevOne)
  revLinkTwo.addEventListener('click',showRevTwo)
  revLinkThree.addEventListener('click',showRevThree)
};


var showRevOne = function(){
  revOne.style.display='flex'
    revTwo.style.display='none'
    revThree.style.display='none'
    console.log('review 1')
}
var showRevTwo = function(){
  revOne.style.display='none'
    revTwo.style.display='flex'
    revThree.style.display='none'
    console.log('review 2')
}
var showRevThree = function(){
  revOne.style.display='none'
    revTwo.style.display='none'
    revThree.style.display='flex'
    console.log('review 3')
}


  
var preLoader = document.querySelector("#preloader");
var btnNav = document.querySelector("#btn-navbar");
var navBarMenu = document.querySelector("#navbar-menu");
var exitNavBtn = document.querySelector("#exit-btn-menu");
var gallery = document.querySelector("#gallery");
var webDesing = document.querySelector("#web-desing");
var mobile = document.querySelector("#mobile");
var webApps = document.querySelector("#web-apps");
var portfolios = document.querySelector("#portfolios");
var revOne = document.querySelector('#rev-1')
var revTwo = document.querySelector('#rev-2')
var revThree = document.querySelector('#rev-3')
var revLinkOne = document.querySelector('#rev-link1')
var revLinkTwo = document.querySelector('#rev-link2')
var revLinkThree = document.querySelector('#rev-link3')


var responseOutput = function(response, i) {
  var ouput = `<div class='img-box'>
        <img src="${response[i].img}"></img>
        <div class="content-box">
            <h2 class='title'>${response[i].title}</h2>
            <p class='desc'>${response[i].description}</p>
        </div>
     </div>   
     `;
  gallery.innerHTML += ouput;
};
var getWebDesing = function() {
  webDesing.classList.add('checked')
  mobile.classList.remove('checked')
  webApps.classList.remove('checked')
  portfolios.classList.remove('checked')
  gallery.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      for (var i in response) {
        if (response[i].tag === "Web design") {
          responseOutput(response, i);
        }
      }
    }
  };
  xhttp.open("GET", "../MOCK_DATA.json", true);
  xhttp.send();
};

var getMobile = function() {
  webDesing.classList.remove('checked')
  mobile.classList.add('checked')
  webApps.classList.remove('checked')
  portfolios.classList.remove('checked')
  gallery.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // Typical action to be performed when the document is ready:
      for (var i in response) {
        if (response[i].tag === "Mobile") {
          responseOutput(response, i);
        }
      }
    }
  };
  xhttp.open("GET", "../MOCK_DATA.json", true);
  xhttp.send();
};

var getWebApps = function() {
  webDesing.classList.remove('checked')
  mobile.classList.remove('checked')
  webApps.classList.add('checked')
  portfolios.classList.remove('checked')
  gallery.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // Typical action to be performed when the document is ready:

      for (var i in response) {
        if (response[i].tag === "Web apps") {
          responseOutput(response, i);
        }
      }
    }
  };
  xhttp.open("GET", "../MOCK_DATA.json", true);
  xhttp.send();
};
var getPortfolios = function() {
  webDesing.classList.remove('checked')
  mobile.classList.remove('checked')
  webApps.classList.remove('checked')
  portfolios.classList.add('checked')
  gallery.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // Typical action to be performed when the document is ready:

      for (var i in response) {
        if (response[i].tag === "Portfolios") {
          responseOutput(response, i);
        }
      }
    }
  };
  xhttp.open("GET", "../MOCK_DATA.json", true);
  xhttp.send();
};
