// Globals
let homeContainer = document.getElementById('container');
let microsoftOffice = document.getElementById('microsoft-office');
let selectMicrosoftOffice = document.querySelector('.microsoft');
let courseNames = document.querySelectorAll('.courses-info');
let homeImages = document.getElementById('images');
let imageBody = document.getElementById('welcome-info');
let nextImageBtn = document.getElementById('next-btn');
let previousImagebtn = document.getElementById('previous-btn');

let infoBtns = document.querySelectorAll('.teachers-btn');

infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let getInfo = btn.getAttribute('data-moreInfo');

        if(getInfo === 'teachers') {
          alert('Teacher');
        } else if(getInfo === 'satisfaction') {
            alert('satisfaction');
        } else if(getInfo === 'classroom') {
            alert('classroom');
        }
    })

})



let imageGallery = [
  imgOne = {
        img: [`<img src="../Images/APEX FLYER.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
    imgTwo = {
        img: [`<img src="../Images/APEX Three.jpg" alt="Computer Training" width="80px" height="100px"></img>`]
    },
   imgThree = {
        img: [`<img src="../Images/APEX flyerThree.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgThree = {
        img: [`<img src="../Images/APEX Three.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgFour = {
        img: [`<img src="../Images/APEX.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgFive = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-18 at 22.18.24_f8630006.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgSix = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.38_a369fc32.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
  imgSeven = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.39_50820400.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgEight = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.40_c38c8c76.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgNine = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 18.56.24_876bb91a.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
   imgTen = {
        img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 18.56.27_0bd0a8a2.jpg" alt="Computer Training" width="80px" height="100px">`]
    },
]

let index = 0;
let imgArr = [];
// Display Image selected
function DisplayImage() {
    imageGallery.forEach(imageObject => {
        let div = document.createElement('div');
        div.className  = 'studentImages';

        let span = document.createElement('span');
        span.classList.add('span-img');
       
        span.innerHTML = imageObject.img;
        div.appendChild(span);
        homeImages.appendChild(div);
        })
}
// DisplayImage();

let bigImageDisplay = document.getElementById('displayBig');
function showImage() {
    let imgIndex = imageGallery[index].img;
    bigImageDisplay.innerHTML = imgIndex;
}


// microsoftOffice.addEventListener('click', OfficeClick);
// courseNames.forEach(names => {
//     console.log(names);
// })
// microsoftOffice.style.backgroundColor = 'red';

function checkClick() {
    courseNames.forEach(names => {
                if(names.innerText === 'Microsoft Office Package') {  
                    // microsoftOffice.style.backgroundColor = 'green';
                    // confirmClick();
                    localStorage.setItem('highlightText', names.textContent);
                    console.log('found microsoft office');
                    console.log(names.innerText);
                    // names.style.color = 'blue';
                }
            })
}


let itemList = [];

// displayFamilyInfos();

function displayFamilyInfos() {
    familyMemberInfo.forEach(users => {
        let div = document.createElement('div');
        div.className = 'spanned';
        let span = document.createElement('span');

        let moreInfo = document.createElement('h4');
        // moreInfo.className = 'more-info';
        span.appendChild(moreInfo);

        span.innerHTML = ` ${users.personImg} 
        ${users.moreInfo}`
        div.appendChild(span);
        familyInfos.appendChild(span);
        itemList.push(span);
    })
}
// Open Burger Menu
let openBurgerMenu = document.getElementById('open-menu');
let burgerMenuIcon = document.getElementById('hamburger-menu-icon');
let closeBurgerMenu = document.getElementById('close-burger-menu');
let menuBars = document.getElementById('menus');

openBurgerMenu.addEventListener('click', () => {
    openBurgerMenu.style.display = 'none';
    menuBars.style.display = 'block';
    closeBurgerMenu.style.display = 'block';
    burgerMenuIcon.style.width = '40%';
    openBurgerMenu.classList.add('open-smooth');
})

// Close Burger Menu
closeBurgerMenu.addEventListener('click', () => {
    openBurgerMenu.style.display = 'block';
    menuBars.style.display = 'none';
    closeBurgerMenu.style.display = 'none';
    closeBurgerMenu.classList.add('close-smooth');
    // burgerMenuIcon.style.width = '0%';
})

// Footer
const footer = document.getElementById('current-year');

const date = new Date();
const fullYear = date.getFullYear();

footer.innerHTML = fullYear;