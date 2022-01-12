let servicesList = document.querySelectorAll('li.services__list__item');
let servicesInfoList = document.querySelectorAll('p.services__info__text');

function init() {
    addEventsToServeses();
    initSlider();
}

function hideElems(servicesInfoList) {
    for (let i = 0; i < servicesInfoList.length; i++) {
        servicesInfoList[i].style.display = "none";
    }
}

function removeClass(className, servicesList) {
    for (let i = 0; i < servicesList.length; i++) {
        servicesList[i].classList.remove(`${className}`);
    }
}


function showWidthInfo() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        console.log("меньше 991")
    } else {
        console.log("больше 991")
    }
}

function onClickChangeColor(e) {
    showWidthInfo();
    removeClass('active', servicesList);
    hideElems(servicesInfoList);

    e.target.classList.add('active');
    servicesInfoList[e.target.getAttribute('data-id')].style.display = "block";
}

function addEventsToServeses() {
    for (let i = 0; i < servicesList.length; i++) {
        servicesList[i].addEventListener("click", onClickChangeColor);
    }
}


function initSlider(){
let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}


init();


