const sections = document.querySelectorAll(".section");
const navbarItems = document.querySelectorAll(".navbar-items");
const navbarItem = document.querySelectorAll(".navbar-item");
const mainContent = document.querySelector(".main-content");


function pageTransition() {
    for (let i = 0; i  < navbarItem.length; i++) {
    navbarItem[i].addEventListener("click", function() {
      let currentBtn = document.getElementsByClassName("active-btn");
      //console.log(currentBtn)
      currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "");
      /* be carrefully, this. doesn't exist with an arrow function */
      this.className += " active-btn";
    });
  }
  // sections active
  mainContent.addEventListener('click', (e) => {
    //console.log(e.target);
    const id = e.target.dataset.id;
    //console.log(id);
    if(id) {
      //remove selected from the other btn
      navbarItems.forEach((btn) => {
        btn.classList.remove('active');
      })
      e.target.classList.add('active');

      //hide other sections 
      sections.forEach((section) => {
        section.classList.remove('active');
      })
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}
pageTransition();
