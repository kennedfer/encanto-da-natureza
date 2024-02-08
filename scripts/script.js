function scrollTo(element){
    console.log(element.top);
    element.scrollIntoView({behavior:'smooth'}); 
}

const homeSection = document.getElementById('main-section');
const aboutSection = document.getElementById('about-section');
const gallerySection = document.getElementById('gallery-section');
const donationSection = document.getElementById('donation-section');

const aboutUsButton = document.getElementById('about-us-button');
 
aboutUsButton.addEventListener('click', ()=> scrollTo(aboutSection));


const homeNav = document.getElementById('home-nav');
const galleryNav = document.getElementById('gallery-nav');
const aboutUsNav = document.getElementById('about-us-nav');
const donationNav = document.getElementById('donation-nav');

homeNav.addEventListener('click', ()=> scrollTo(homeSection));
galleryNav.addEventListener('click', ()=> scrollTo(gallerySection));
aboutUsNav.addEventListener('click', ()=> scrollTo(aboutSection));
donationNav.addEventListener('click', ()=> scrollTo(donationSection));