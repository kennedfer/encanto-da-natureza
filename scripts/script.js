function scrollTo(element){
    console.log(element.top);
    element.scrollIntoView({behavior:'smooth'}); 
}

function expandGallery(){
    const galleryContainer =  gallerySection.children.item(1); 
    gallerySection.style.height =galleryContainer.scrollHeight +170+'px';
    showMoreGalleryButton.textContent = 'mostrar menos';
}

function collapseGallery(){
    gallerySection.style.height = 'calc(100vh - 100px)';
    showMoreGalleryButton.textContent = 'mostrar mais';
}

function handleShowMoreGalleryClick(){
    showMoreGalleryButton.textContent == 'mostrar mais' ? expandGallery() : collapseGallery();
}

const homeSection = document.getElementById('main-section');
const aboutSection = document.getElementById('about-section');
const gallerySection = document.getElementById('gallery-section');
const donationSection = document.getElementById('donation-section');

const aboutUsButton = document.getElementById('about-us-button');
const showMoreGalleryButton = document.getElementById('show-more-button');
aboutUsButton.addEventListener('click', ()=> scrollTo(aboutSection));
showMoreGalleryButton.addEventListener('click', handleShowMoreGalleryClick);


const homeNav = document.getElementById('home-nav');
const galleryNav = document.getElementById('gallery-nav');
const aboutUsNav = document.getElementById('about-us-nav');
const donationNav = document.getElementById('donation-nav');

homeNav.addEventListener('click', ()=> scrollTo(homeSection));
galleryNav.addEventListener('click', ()=> scrollTo(gallerySection));
aboutUsNav.addEventListener('click', ()=> scrollTo(aboutSection));
donationNav.addEventListener('click', ()=> scrollTo(donationSection));