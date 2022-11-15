const section2ParentContainer = document.querySelector('.about-me-container');

const aboutMeButton = document.querySelector('#about-me-button');

const servicesButton = document.querySelector('#services-button');

const aboutMeContent1 = document.querySelector('.about-me-content')
const aboutMeContentRight = document.querySelector('.right-side-text')
const aboutMeContentLeft = document.querySelector('.left-side-text')
const aboutMeLeftContainer = document.querySelector('.left-container');
const aboutMeRightContainer = document.querySelector('.right-container')

const aboutMeContent = document.querySelector('.about-me-content');
const servicesContent = document.querySelector('.services-content');

function activateAboutMe () {
    servicesContent.classList.add('hidden');
    aboutMeContent.classList.remove('hidden');
     aboutMeContentLeft.classList.remove('hidden');
    aboutMeContentRight.classList.remove('hidden');
    section2ParentContainer.style.backgroundColor = '#F1381A';
    aboutMeButton.style.backgroundColor = '#CDED99';
    servicesButton.style.color = '#F1381A';
    servicesButton.style.backgroundColor = '#FEF9ED'
}

function activateServices () {
    aboutMeContent.classList.add('hidden');
    servicesContent.classList.remove('hidden');
    aboutMeContentLeft.classList.add('hidden');
    aboutMeContentRight.classList.add('hidden');
    section2ParentContainer.style.backgroundColor = '#CDED99';
    servicesButton.style.backgroundColor = '#F1381A';
    servicesButton.style.color = ' #D9EFAD';
    aboutMeButton.style.backgroundColor = '#FEF9ED';
}

aboutMeButton.addEventListener('click', activateAboutMe)
servicesButton.addEventListener('click', activateServices)
