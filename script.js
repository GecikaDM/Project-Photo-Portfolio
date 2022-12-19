const sections = document.querySelectorAll(".section");
const navbarItems = document.querySelectorAll(".navbar-items");
const navbarItem = document.querySelectorAll(".navbar-item");
const mainContent = document.querySelector(".main-content");


/* modal variables*/
const modal = document.querySelector('.modal');
/* const btnCategory = document.querySelectorAll('.btn-open');
//console.log(btnCategory); */
const openEls = document.querySelectorAll('[data-open]');
console.log(openEls);
const closeModal = document.querySelectorAll('.close-modal');
console.log(closeModal);



/* variables slides*/

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slides-container').children;
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


/* btnCategory.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = "block";
  });
}) */

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

closeModal.addEventListener('click', ()=> {
  modal.style.display = "none";
})


/* modal slides images*/

let index = 0;

prev.addEventListener('click', () => {
  nextSlide('prev');
});

next.addEventListener('click', () => {
  nextSlide('next');
});

function nextSlide(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalSlides) {
      index = 0;
    }
  }else {
    if(index == 0) {
      index = totalSlides -1;
    }else {
      index--;
    }
  }
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
    //console.log(images[i]);
  }
  images[index].classList.add('main');
};

