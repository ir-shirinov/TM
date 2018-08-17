var modalByu = document.querySelector('.modal-byu');
var close = document.querySelectorAll('.close');
var buy = document.querySelectorAll('.buy-product');





for (var i =0; i<buy.length; i++) {

buy[i].addEventListener('click', function(evt) {
	evt.preventDefault();
	modalByu.classList.add('active');
});

};

for (var i =0; i<close.length; i++) {

close[i].addEventListener('click', function(evt) {
	modalByu.classList.remove('active');
});

};