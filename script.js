let list = document.querySelector('.header ul');
let btn = document.querySelector('.header button');
let img = document.querySelector('.header button img');


btn.addEventListener('click', e => {

	if(img.alt === "menu"){
		list.style.display = 'block';
		img.alt = "close";
	}else {
		list.style.display = 'none';
		img.alt = "menu";
	}
    
 });


// animation

/*let aboutMeBox = document.querySelector('.about-me');
let skillsBox = document.querySelector('.skills');

let sectionForAnimation = document.querySelector('#section2');
let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
let screenPosition = window.innerHeight / 1.3;



window.onscroll = () => {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){ 
		  aboutMeBox.classList.remove('slideFromLeft');
		  skillsBox.classList.remove('slideFromRight');
   }
}*/





