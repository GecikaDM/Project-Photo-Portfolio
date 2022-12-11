const section = document.querySelectorAll(".section");
//console.log(section);
const navbarItems = document.querySelectorAll(".navbar-items");
//console.log(navbarItems);
const navbarItem = document.querySelectorAll(".navbar-item");
//console.log(navbarItem);
const mainContent = document.querySelector(".main-content");


function pageTransition() {
    for (let i = 0; i  < navbarItem.length; i++) {
    navbarItem[i].addEventListener("click", function() {
      let currentBtn = document.getElementsByClassName("active-btn");
      console.log(currentBtn)
      currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "");
      /* be carrefully, this. doesn't exist with an arrow function */
      this.className += " active-btn";
    });
  }
}
pageTransition();
