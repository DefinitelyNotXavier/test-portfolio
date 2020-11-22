let img_Cont1 = document.querySelector('.img_Cont1');
let img_Cont2 = document.querySelector('.img_Cont2');
let img_Cont3 = document.querySelector('.img_Cont3');
let img_Cont4 = document.querySelector('.img_Cont4');

let img_txt1 = document.querySelector('.img_txt1');
let img_txt2 = document.querySelector('.img_txt2');
let img_txt3 = document.querySelector('.img_txt3');
let img_txt4 = document.querySelector('.img_txt4');
let infEndSIV1 = document.querySelector('.infEndSIV1');
let myinfBox = document.querySelector('.myinfBox');

//alert('working');
window.addEventListener('scroll', () => {
	if(img_Cont1.getBoundingClientRect().top < window.innerHeight * .90){
		img_Cont1.classList.add('animateWidth');
		img_Cont1.style.cssText = 'opacity: 1';
		
		img_txt1.style.cssText = 'opacity: 1';
		img_txt1.classList.add('animateTxtTrans');
	}
	img_Cont1.addEventListener('click', (e) => {
//		alert('working!');
		infEndSIV1.scrollIntoView({behavior: 'smooth', block: 'end'});
		myinfBox.style.cssText = 'height: 100%; transition: 0.5s;';
	});
	
	if(img_Cont2.getBoundingClientRect().top < window.innerHeight * .90){
		img_Cont2.classList.add('animateWidth');
		img_Cont2.style.cssText = 'opacity: 1';
		
		img_txt2.style.cssText = 'opacity: 1';
		img_txt2.classList.add('animateTxtTrans');
	}
	if(img_Cont3.getBoundingClientRect().top < window.innerHeight * .90){
		img_Cont3.classList.add('animateWidth');
		img_Cont3.style.cssText = 'opacity: 1';
		
		img_txt3.style.cssText = 'opacity: 1';
		img_txt3.classList.add('animateTxtTrans');
	}
	
	if(img_Cont4.getBoundingClientRect().top < window.innerHeight * .90){
		img_Cont4.classList.add('animateWidth');
		img_Cont4.style.cssText = 'opacity: 1';
		
		img_txt4.style.cssText = 'opacity: 1';
		img_txt4.classList.add('animateTxtTrans');
	}
});















