let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
let sidemenu = document.getElementById('sidemenu');


function opentab(tabname) {
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link');
    }
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function closemenu() {
    sidemenu.style.right = '-200px';
}

function openmenu() {
    sidemenu.style.right = '0';
}

