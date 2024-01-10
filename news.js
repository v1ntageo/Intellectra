let readmore = document.querySelector('.blog__readmore');
let blogItemsHidden = document.querySelector('.blog__items--second');
readmore.addEventListener('click', function(){
  blogItemsHidden.classList.remove('hidden');
  readmore.remove();
});