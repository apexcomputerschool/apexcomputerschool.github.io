// Globals
const homeContainer = document.getElementById('container');
const microsoftOffice = document.getElementById('microsoft-office');
const selectMicrosoftOffice = document.querySelector('.microsoft');
const courseNames = document.querySelectorAll('.courses-info');
const homeImages = document.getElementById('images');
const imageBody = document.getElementById('welcome-info');
const nextImageBtn = document.getElementById('next-btn');
const previousImagebtn = document.getElementById('previous-btn');

const infoBtns = document.querySelectorAll('.teachers-btn');

infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const getInfo = btn.getAttribute('data-moreInfo');

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
        img: [`<img src="Images/Apex Computer School Classroom.png" alt="Computer Training" width="80px" height="100px">`]
    },
    imgTwo = {
        img: [`<img src="Images/Apex Computer School Inside Banner.jpg" alt="Computer Training" width="80px" height="100px"></img>`]
    },
   imgThree = {
        img: [`<img src="Images/Apex Computer School Flyer One.png" alt="Computer Training" width="80px" height="100px">`]
    },
   imgThree = {
        img: [`<img src="Images/Apex Computer School Flyer Two.png" alt="Computer Training" width="80px" height="100px">`]
    }
//    imgFour = {
//         img: [`<img src="../Images/APEX.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//    imgFive = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-18 at 22.18.24_f8630006.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//    imgSix = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.38_a369fc32.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//   imgSeven = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.39_50820400.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//    imgEight = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 12.49.40_c38c8c76.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//    imgNine = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 18.56.24_876bb91a.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
//    imgTen = {
//         img: [`<img src="../Images/WhatsApp Image 2025-10-27 at 18.56.27_0bd0a8a2.jpg" alt="Computer Training" width="80px" height="100px">`]
//     },
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

// Display Image On Browser
let bigImageDisplay = document.getElementById('displayBig');

if(bigImageDisplay) {
function showImage() {
    let imgIndex = imageGallery[index].img;
    // console.log('Img: ' + imgIndex.img)
    bigImageDisplay.innerHTML = imgIndex;
}
showImage();
}


// Click greater-than sign to dIsplay next image 
let greaterThan = document.getElementById('greater-than');

if(greaterThan) {
greaterThan.addEventListener('click', () => {
    let imgIndex = imageGallery[index];
    
    index = index < imageGallery.length - 1 ? index + 1 : 0;
    showImage();
})
}


// Click less-than sign to dIsplay next image 
let lessThan = document.getElementById('less-than');

if(lessThan) {
lessThan.addEventListener('click', () => {
    let imgIndex = imageGallery[index];
    
    index = index < imageGallery.length - 1 ? index + 1 : 0;
    showImage();
})
}


// Display image gallery
let animate = () => {
    setInterval(() => {  
        index = index < imageGallery.length - 1 ? index + 1 : 0;
         showImage();
        }, 2000);
    
}

// animate();

// Microsoft Office Package Info
let officePackageInfo = document.getElementById('microsoft-office-package');
let officePackage = document.getElementById('microsoft-office-selected');

let closeBtn = document.getElementById('close-btn');

// Open Microsoft Office Package Info
if(officePackageInfo && officePackage) {
officePackage.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    officePackageInfo.style.display = 'block';
})

}

// Close Microsoft Office Package Info
if(closeBtn) {
closeBtn.addEventListener('click', () => {
    officePackageInfo.style.display = 'none';
    homeContainer.style.display = 'block';
})
}


// // ================= MICROSOFT OFFICE PACKAGE =================
// let officePackageInfo = document.getElementById('microsoft-office-package');
// let officePackage = document.getElementById('microsoft-office-selected');
// let officeCloseBtn = officePackageInfo.querySelector('.close-btn');

// // Open Microsoft Office Package
// officePackage.addEventListener('click', () => {
//     homeContainer.style.display = 'none';
//     officePackageInfo.style.display = 'block';
// });

// // Close Microsoft Office Package
// officeCloseBtn.addEventListener('click', () => {
//     officePackageInfo.style.display = 'none';
//     homeContainer.style.display = 'block';
// });


// ================= COMPUTER FUNDAMENTAL =================
let computerFundamentalInfo = document.getElementById('computer-fundamental');
let computerFundamentalBtn = document.getElementById('computer-fundamental-selected');


// Open Computer Fundamental
if(computerFundamentalBtn && computerFundamentalInfo) {
computerFundamentalBtn.addEventListener('click', () => {
    
    homeContainer.style.display = 'none';
    computerFundamentalInfo.style.display = 'block';
});
}

// Close Computer Fundamental
let computerCloseBtn = document.getElementById('computer-fundamental-close-btn');
if(computerCloseBtn && computerFundamentalInfo) {
computerCloseBtn.addEventListener('click', () => {
    console.log('fundamental close')
    computerFundamentalInfo.style.display = 'none';
    homeContainer.style.display = 'block';
});
}



// ================= GRAPHIC DESIGN =================
let graphicDesignInfo = document.getElementById('graphic-design-course');
let graphicDesignBtn = document.getElementById('graphic-design-selected');

// Open Graphic Design
if(graphicDesignBtn && graphicDesignInfo) {
graphicDesignBtn.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    graphicDesignInfo.style.display = 'block';
});
}


// Close Graphic Design
let graphicCloseBtn = document.getElementById('graphic-design-close-btn');

if(graphicCloseBtn) {
graphicCloseBtn.addEventListener('click', () => {
    graphicDesignInfo.style.display = 'none';
    homeContainer.style.display = 'block';
});
}



// ================= WEB DESIGN =================
let webDesignInfo = document.getElementById('web-design-course');
let webDesignBtn = document.getElementById('web-design-selected');


// Open Web Design
if(webDesignBtn && webDesignInfo) {
webDesignBtn.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    webDesignInfo.style.display = 'block';
});
}


// Close Web Design
let webCloseBtn = document.getElementById('web-design-close-btn');

if(webCloseBtn) {
webCloseBtn.addEventListener('click', () => {
    webDesignInfo.style.display = 'none';
    homeContainer.style.display = 'block';
});

}

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

console.log('Javascript Is Connected.')

// Close Burger Menu
closeBurgerMenu.addEventListener('click', () => {
    openBurgerMenu.style.display = 'block';
    menuBars.style.display = 'none';
    closeBurgerMenu.style.display = 'none';
    closeBurgerMenu.classList.add('close-smooth');
    // burgerMenuIcon.style.width = '0%';
})

// Footer
let footer = document.getElementById('current-year');

let date = new Date();
let fullYear = date.getFullYear();

footer.innerHTML = fullYear;

// let displayInfos = document.getElementById('displayInfo');
// let indexTech = 0;

// let displayText = ['HTML', 'CSS', 'JAVASCRIPT'];

// function techSlide() {
//     // let slideIndex = displayText[indexTech];

//         // Get current item
//     let slideIndex = displayText[indexTech];

//     // Show current item
//     displayInfos.innerHTML = `This Tech is: ${slideIndex}`;

//     console.log(slideIndex);

//     // Move to next item
//     indexTech++;

//     // Restart from beginning
//     if (indexTech >= displayText.length) {
//         indexTech = 0;
//     }
// }



// setInterval( () => {
// // techSlide();
// }, 1000)







