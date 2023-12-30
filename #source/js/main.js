"use strict";
//Липкий header
window.onscroll = function headerFix() {
    const header = document.querySelector('#header-section');
    
    if(window.pageYOffset > 620) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};

//Активная ссылка
const navLinks = document.querySelectorAll('.nav__list-link');

navLinks.forEach(function(links) {
    links.addEventListener('click', function() {
        navLinks.forEach(function(link) {
            link.classList.remove('nav__list-link--selected');
        })
        this.classList.add('nav__list-link--selected');
    })
});

//Мобильное меню
const mobileMenu = document.querySelector('.nav-mobile');

document.addEventListener('click', navToggler);

function navToggler(event) {
    if(event.target.closest('.nav__toggle')) {
        mobileMenu.classList.toggle('active');
    } else {
        mobileMenu.classList.remove('active');
    }
};

//Табы Our projects
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
        contentBoxes.forEach(function(item) {
            item.classList.add('tab-hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('tab-hidden');
    })  
})

//Стиль активного таба
const tabLinks = document.querySelectorAll('.projects__item');

tabLinks.forEach(function(links) {
    links.addEventListener('click', function() {
        tabLinks.forEach(function(link) {
            link.classList.remove('projects__item-selected');
        })
        this.classList.add('projects__item-selected');
    })
});

