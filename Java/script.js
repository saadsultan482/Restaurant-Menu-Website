let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2500)
}

window.onload = fadeOut;


function showImage() {
    var x = document.getElementsByClassName("myImg");
    for (var i = 0; i < x.length; i++) {
       if (x[i].style.display === "none") {
          x[i].style.display = "block";
       } else {
          x[i].style.display = "none";
       }
    }
   }

//    var myImg = document.querySelector('.myImg');
// myImg.addEventListener('click', function() {
//     this.style.display = 'none';
// });
//    document.getElementById('closeButton').addEventListener('click', function() {
//     document.querySelector('.myImg').style.display = 'none';
// });


function openImage() {
    document.getElementById('imageContainer').classList.remove('hidden');
   }
   
   function closeImage() {
    document.getElementById('imageContainer').classList.add('hidden');
   }
   
   // optional: function to zoom in image when clicked
//    document.getElementById('myImg').onclick = function() {
//     this.style.transform = 'scale(1.3)';
//    }


document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});



   