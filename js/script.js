let searchBtn = document.querySelector('.btn-sedona');
let searchForm = document.querySelector('.search-form-wrap');
let inputIn = document.querySelector('.input-1');
let inputOut = document.querySelector('.input-2');
let submitBtn = document.querySelector('.btn-find');
let inputAdult = document.querySelector('.adults');
let inputChild = document.querySelector('.childs');

searchBtn.addEventListener('click', function slideDown() {
	searchForm.classList.remove('shake');	
	searchForm.classList.toggle('hidden');
	searchForm.classList.add('slide-down');
});

submitBtn.addEventListener('click', function shake(e)  {
   if (inputIn.value === '' || inputOut.value === '' || (inputAdult.value === '' && inputChild.value === '')) {
	  e.preventDefault();
	  searchForm.classList.remove('shake');
	  searchForm.offsetWidth = searchForm.offsetWidth;
	  searchForm.classList.remove('slide-down');
	  searchForm.classList.add('shake');
   }
});