let searchBtn = document.querySelector('#search-btn')
let searchbar = document.querySelector('.search-bar-container')

window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchbar.classList.remove('active')
}
searchBtn.addEventListener('click', () =>{
	searchBtn.classList.toggle('fa-times');
	searchbar.classList.toggle('active')
})
/*================ loing form container start ==================*/
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')

window.onscroll = () =>{
	loginForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
	loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
	loginForm.classList.remove('active');
})
/*================ loing form container end ==================*/


/*================ navbar part start ==================*/
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active')
}
menu.addEventListener('click', () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active')
})
/*================ navbar part end ==================*/


/*================ home video part start ==================*/
let videoBtn = document.querySelectorAll('.vid-btn')

videoBtn.forEach(btn =>{
	btn.addEventListener('click', ()=>{
		document.querySelector('.controls .active').classList.remove('active')
		btn.classList.add('active');
		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	})
})
/*================ home video part end ==================*/

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
  	640: {
  		slidesPerView: 1,
  	},
  	768: {
  		slidesPerView: 2,
  	},
  	1024: {
  		slidesPerView: 3,
  	},
  },
});


var swiper = new Swiper(".brand-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
  	450: {
  		slidesPerView: 2,
  	},
  	768: {
  		slidesPerView: 3,
  	},
  	991: {
  		slidesPerView: 4,
  	},
  	1200: {
  		slidesPerView: 5,
  	},
  },
});



