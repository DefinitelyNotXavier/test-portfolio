//window.onload = function(){
	
let topNavBar = document.querySelector('.topNav');
let mainCont = document.querySelector('.mainCont');
let mainContCont2 = document.querySelector('.mainContCont2');

let pageBtn_next = document.querySelector('.nextCont');
let pageBtn_prev = document.querySelector('.prevCont');
let slideshowCont = document.querySelector('.slideshowCont');

let introTitle = document.querySelector('.introTitle');

let topItemsNames = document.querySelectorAll('.topItemsNames');


let pageCount = 1;
let changeTEXT = ()=>{
	if(pageCount == 1){
		introTitle.textContent="Ideas for BETTER YOU";
	}if(pageCount == 2){
		introTitle.textContent="Giving SHINE to Your Style";
	}if(pageCount == 3){
		introTitle.textContent="Love YOURSELF Better";
	}if(pageCount == 4){
		introTitle.textContent="More COLORS, More FUN!";
	}if(pageCount == 5){
		introTitle.textContent="People will LOVE You More";
	}
};
//pageBtn_prev.style.cssText = 'display: none;';
pageBtn_next.addEventListener('click', (val)=>{
//	if(pageCount > 3) pageBtn_next.style.cssText = 'display: none;';
//	else{
//		pageBtn_next.style.cssText = 'display: block;';
//		pageBtn_prev.style.cssText = 'display: block;';
//	}
	if(pageCount > 4) return; // not pass here if true
		pageCount++;
		slideshowCont.style.cssText="height: 100%; width: 100%; background-image: url("+"bg_banner.svg"+"), linear-gradient(to right, blue, powderblue);";
//                topItemsNames.forEach((e)=>{e.classList.add('colorWhite');});
//	changeTEXT();
});
pageBtn_prev.addEventListener('click', (val)=>{
//	if(pageCount <= 2) pageBtn_prev.style.cssText = 'display: none;';
//	else{
//		pageBtn_prev.style.cssText = 'display: block;';
//		pageBtn_next.style.cssText = 'display: block;';
//	}
	if(pageCount < 2) return; // not pass here if true
		pageCount--;
		slideshowCont.style.cssText="height: 100%; width: 100%;";
//	changeTEXT();
});

const current = [];
let scrollFlag = false;
let plusMin = 0;

window.addEventListener('scroll', () => {
	let pgY = window.pageYOffset;
	temp = pgY;
	current.push(temp);
	if(temp > current[0]){
		plusMin++;
		current[0] = temp;
//		console.log('current: '+current[0]);
		scrollFlag = false;
	}
	if(temp < current[0]){
		plusMin--;
		current[0] = temp;
//		console.log('current: '+current[0]);
		scrollFlag = true;
	}
	if(pgY > 65) topNavBar.classList.add('changeToFixedNav');
	if(pgY < (topNavBar.getBoundingClientRect().bottom * 4) && scrollFlag){
		topNavBar.classList.remove('changeToFixedNav');
		topNavBar.scrollIntoView();
	}	
	console.log(temp, current[0], plusMin);
	console.log(current);
});

let estYearCont = document.querySelector('.estYearCont');
let scrollProfile = document.querySelectorAll('.scrollProfile');

scrollProfile.forEach((ev) => {
	ev.addEventListener('click', (e) => {
		estYearCont.scrollIntoView({behavior: 'smooth'});
	});
});

let navProj = document.querySelector('.navProj');
let scrollProject = document.querySelectorAll('.scrollProject');
scrollProject.forEach((ev) => {
	ev.addEventListener('click', (e) => {
		navProj.scrollIntoView({behavior: 'smooth'});
	});
});

let navService = document.querySelector('.navService');
let scrollService = document.querySelectorAll('.scrollService');
scrollService.forEach((ev) => {
	ev.addEventListener('click', (e) => {
		navService.scrollIntoView({behavior: 'smooth'});
	});
});









