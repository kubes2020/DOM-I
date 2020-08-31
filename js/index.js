console.log('hello');

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png')

let bigLogo = document.getElementById('cta-img');
bigLogo.src = 'img/header-img.png';

let midPic = document.getElementById('middle-img');
midPic.src = 'img/mid-page-accent.jpg';

const nav = document.querySelector('nav');
const nav1 = nav.querySelector('a:nth-of-type(1)');
const nav2 = nav.querySelector('a:nth-of-type(2)');
const nav3 = nav.querySelector('a:nth-of-type(3)');
const nav4 = nav.querySelector('a:nth-of-type(4)');
const nav5 = nav.querySelector('a:nth-of-type(5)');
const nav6 = nav.querySelector('a:nth-of-type(6)');

nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];

nav1.style.color = 'green';
nav2.style.color = 'green';
nav3.style.color = 'green';
nav4.style.color = 'green';
nav5.style.color = 'green';
nav6.style.color = 'green';


const domAwesome = document.querySelector('.cta-text h1');
domAwesome.innerHTML = 'DOM <br> IS <br> AWESOME';

const getStarted = document.querySelector('.cta-text button');
getStarted.textContent = siteContent['cta']['button'];

const textCont = document.querySelector('.main-content .top-content .text-content');
textCont.children[0].textContent = 'Features';
textCont.children[1].textContent = siteContent['main-content']['features-content'];
// textCont.children[3].textContent = siteContent['main-content']['about-h4'];

const textCont1 = textCont.nextElementSibling.children
textCont1[0].textContent = siteContent['main-content']['about-h4'];
textCont1[1].textContent = siteContent['main-content']['about-content'];

const botCont = document.querySelector('.bottom-content .text-content');
botCont.children[0].textContent = siteContent['main-content']['services-h4'];
botCont.children[1].textContent = siteContent['main-content']['services-content'];

const botCont1 = botCont.nextElementSibling.children
botCont1[0].textContent = siteContent['main-content']['product-h4'];
botCont1[1].textContent = siteContent['main-content']['product-content'];

const botCont2 = document.querySelector('.bottom-content .text-content:nth-of-type(3)');
botCont2.children[0].textContent = siteContent['main-content']['vision-h4'];
botCont2.children[1].textContent = siteContent['main-content']['vision-content'];








// const textCont1h4 = document.querySelector('h4')
// textCont1h4.textContent = siteContent['.main-content']['features-h4'];

