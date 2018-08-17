var slide1 = document.querySelector('.slider-one');
var slide2 = document.querySelector('.slider-two');
var label1 = document.querySelector('[for=sliders-1]');
var label2 = document.querySelector('[for=sliders-2]');
var input1 = document.querySelector('[id=sliders-1]');
var input2 = document.querySelector('[id=sliders-2]');
var back = document.querySelector('.back');
var next = document.querySelector('.next');

label1.addEventListener('click', function(evt) {
	slide1.classList.add('active');
	slide2.classList.remove('active')
});

label2.addEventListener('click', function(evt) {
	slide2.classList.add('active');
	slide1.classList.remove('active')
});

back.addEventListener('click', function(evt) {
	if (input1.hasAttribute('checked')) {
		input1.removeAttribute('checked');
		input2.setAttribute('checked', 'checked');
	} else {
		input2.removeAttribute('checked');
		input1.setAttribute('checked', 'checked');
	};
	slide1.classList.toggle('active');
	slide2.classList.toggle('active');
});

next.addEventListener('click', function(evt) {
	if (input1.hasAttribute('checked')) {
		input1.removeAttribute('checked');
		input2.setAttribute('checked', 'checked');
	} else {
		input2.removeAttribute('checked');
		input1.setAttribute('checked', 'checked');
	};
	slide1.classList.toggle('active');
	slide2.classList.toggle('active');
});

var openMap = document.querySelector('.button-map');
var map = document.querySelector('.map');
var modalMap = document.querySelector('.modal-map');
var modalByu = document.querySelector('.modal-byu');
var modalLetter = document.querySelector('.modal-letter');
var close = document.querySelectorAll('.close');
var buy = document.querySelectorAll('.buy-product');
var nameSave = localStorage.getItem('name-user');
var emailSave = localStorage.getItem('email');
var nameUser = document.querySelector('[name=name]');
var email = document.querySelector('[name=email]');
var subm = document.querySelector('[type=submit]');

openMap.addEventListener('click', function(evt) {
	modalLetter.classList.add('active');

	if (nameSave) {
		nameUser.value = nameSave;
	};

	if (emailSave) {
		email.value = emailSave;
	};
});

map.addEventListener('click', function(evt) {
	modalMap.classList.add('active');
});

subm.addEventListener('click', function(evt) {
	evt.preventDefault();
	nameSave = localStorage.setItem('name-user', nameUser.value);
	emailSave = localStorage.setItem('email', email.value);
});

for (var i =0; i<buy.length; i++) {

buy[i].addEventListener('click', function(evt) {
	evt.preventDefault();
	modalByu.classList.add('active');
});

};

for (var i =0; i<close.length; i++) {

close[i].addEventListener('click', function(evt) {
	modalMap.classList.remove('active');
	modalByu.classList.remove('active');
	modalLetter.classList.remove('active');
});

};


