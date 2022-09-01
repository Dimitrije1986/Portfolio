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