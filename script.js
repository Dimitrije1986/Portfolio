let list = document.querySelector('.header ul');
let btn = document.querySelector('.header button');

btn.addEventListener('click', e => {

	if (btn.innerText === 'MENU') {
		list.style.display='block';
        btn.innerText = 'CLOSE';
	} else {
		list.style.display='none';
        btn.innerText = 'MENU';
	}
    
 });

// animation

let aboutMeBox = document.querySelector('.about-me');
let skillsBox = document.querySelector('.skills');

let sectionForAnimation = document.getElementById('section2');
let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

let project = document.querySelector('.project-wrapper');


window.onscroll = () => {
	
	if (sectionPosition = screenPosition) {
			aboutMeBox.classList.remove("animated-a");
			skillsBox.classList.remove("animated-s");
			project.classList.remove("animated-p")
	}
	
}

