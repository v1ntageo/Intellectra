// Инициализация всех переменных
let blogItems = document.querySelectorAll('.blog__content-item');
let buttonAI = document.querySelector('.blog__content-tags-item--ai');
let buttonNL = document.querySelector('.blog__content-tags-item--nl');
let buttonCV = document.querySelector('.blog__content-tags-item--cv');
let buttonBL = document.querySelector('.blog__content-tags-item--bl');
let readmoreNormal = document.querySelector('.readmore--normal');
let readmoreMobileBtns = document.querySelectorAll('.readmore--mobile');
let readmoreMobileFirst = readmoreMobileBtns[0];
let readmoreMobileSecond = readmoreMobileBtns[1];
let readmoreMobileThird = readmoreMobileBtns[2];

// Слайдер
$(document).ready(function(){
  $('.discover__slider').slick({
    infinite: true,
    prevArrow: false,
    nextArrow: '<button class="arrow-next"><img src="main/discover/arrow-right.svg" width="18" height="32" alt="arrow right"></button>',
  });
});

// Отключение hidden у элементов при 320px 
window.addEventListener('load', function() {
  if (window.innerWidth == 320) {
    blogItems.forEach((item) => {
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
      }
    })

    // Вешаем на элементы №5-15 hidden при 320px
    for (let i = 4; i <= 14; i++) {
      blogItems[i].classList.add('hidden');
    }

    // Делаем кнопки "Показать ещё" (2, 3) невидимыми при 320px
    for (let i = 1; i <= 3; i++) {
      readmoreMobileBtns[i].classList.add('hidden');
    }
  }
});

// Кнопки "Показать ещё" для 320px
if (window.innerWidth == 320) {
  // Первая кнопка "Показать ещё"
  readmoreMobileFirst.addEventListener('click', function() {
    for (let i = 4; i <= 7; i++) {
      blogItems[i].classList.remove('hidden');
      readmoreMobileSecond.classList.remove('hidden');
      readmoreMobileFirst.classList.add('hidden');
    }
  })

  // Вторая кнопка "Показать ещё"
  readmoreMobileSecond.addEventListener('click', function() {
    for (let i = 8; i <= 11; i++) {
      blogItems[i].classList.remove('hidden');
      readmoreMobileThird.classList.remove('hidden');
      readmoreMobileSecond.classList.add('hidden');
    }
  })

  // Третья кнопка "Показать ещё"
  readmoreMobileThird.addEventListener('click', function() {
    for (let i = 12; i <= 14; i++) {
      blogItems[i].classList.remove('hidden');
      readmoreMobileThird.classList.add('hidden');
    }
  })
}

// Кнопка "Показать ещё" для 1280px
readmoreNormal.addEventListener('click', function(){
  blogItems.forEach((item) => {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
      readmoreNormal.classList.add('hidden');
    }
  })
  readmore.remove();
});

//popup
$(document).ready(function() {
	$('.about__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

// Фильтр. Кнопка "Искусственный интеллект"
buttonAI.addEventListener('click', function() {
  blogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  blogItems.forEach((item) => {
    if (item.classList.contains('ai')) {
      item.classList.remove('hidden');
    }
    readmoreNormal.remove();
  });
});

// Фильтр. Кнопка "Обработка естественного языка"
buttonNL.addEventListener('click', function() {
  blogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  blogItems.forEach((item) => {
    if (item.classList.contains('nl')) {
      item.classList.remove('hidden');
    }
    readmoreNormal.remove();
  });
});

// Фильтр. Кнопка "Компьютерное зрение"
buttonCV.addEventListener('click', function() {
  blogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  blogItems.forEach((item) => {
    if (item.classList.contains('cv')) {
      item.classList.remove('hidden');
    }
    readmoreNormal.remove();
  });
});

// Фильтр. Кнопка "Основы обучения"
buttonBL.addEventListener('click', function() {
  blogItems.forEach((item) => {
    item.classList.add('hidden');
  });
  
  blogItems.forEach((item) => {
    if (item.classList.contains('bl')) {
      item.classList.remove('hidden');
    }
    readmoreNormal.remove();
  });
});