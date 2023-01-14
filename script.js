const sections = document.querySelectorAll(".section");
const navbarItems = document.querySelectorAll(".navbar-items");
const navbarItem = document.querySelectorAll(".navbar-item");
const mainContent = document.querySelector(".main-content");


/* modal variables*/
const modal = document.querySelectorAll('.modal');
//console.log(modal);
const openEls = document.querySelectorAll('[data-open]');
////console.log(openEls);
const closeModal = document.querySelectorAll('.close-modal');
//console.log(closeModal);



/* variables slides*/

const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const images = document.getElementsByClassName('slide');
//console.log(images);

const totalSlides = images.length;




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


/* modal slide open*/



openEls.forEach(els => {
  els.addEventListener('click', function() {
    const modalId = this.dataset.open;
    console.log(modalId);
    document.getElementById(modalId).style.display = "block";
  });
});



window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.display = "none"
  }
});


closeModal.forEach(closeUp => {
  closeUp.addEventListener('click', function() {
    const closeUpId = this.dataset.close;
    //console.log(closeUpId);
    document.getElementById(closeUpId).style.display = "none";
  });
});


/* modal slides images*/
 
let slideIndex = [1,1,1];
console.log(slideIndex)

let slideId = ["mySlides1", "mySlides2", "mySlides3"];
console.log(slideId);

nextSlide(1, 0);
nextSlide(1, 1);
nextSlide(1, 2);


/* prev next */ 
function plusSlides(n, no) {
  nextSlide(slideIndex[no] += n, no);
}


function nextSlide(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }    
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";  
}

