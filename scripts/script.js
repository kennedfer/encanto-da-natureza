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


const footerHomeNav = document.getElementById('footer-home-nav');
const footerGalleryNav = document.getElementById('footer-gallery-nav');
const footerAboutUsNav = document.getElementById('footer-about-us-nav');
const footerDonationNav = document.getElementById('footer-donation-nav');

const headerHomeNav = document.getElementById('header-home-nav');
const headerGalleryNav = document.getElementById('header-gallery-nav');
const headerAboutUsNav = document.getElementById('header-about-us-nav');
const headerDonationNav = document.getElementById('header-donation-nav');

headerHomeNav.addEventListener('click', ()=> scrollTo(homeSection));
headerGalleryNav.addEventListener('click', ()=> scrollTo(gallerySection));
headerAboutUsNav.addEventListener('click', ()=> scrollTo(aboutSection));
headerDonationNav.addEventListener('click', ()=> scrollTo(donationSection));

footerHomeNav.addEventListener('click', ()=> scrollTo(homeSection));
footerGalleryNav.addEventListener('click', ()=> scrollTo(gallerySection));
footerAboutUsNav.addEventListener('click', ()=> scrollTo(aboutSection));
footerDonationNav.addEventListener('click', ()=> scrollTo(donationSection));