const menuTriggerTopOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
const menuTriggerBottomOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');

const menuTriggerTopClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');
const menuTriggerBottomClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');

function toggleMenu() {
    document.documentElement.classList.toggle('menu-open');
    islHolder.classList.toggle('isl_holder--open');

    if (islHolder.classList.contains('isl_holder--open')) {
        menuTriggerTopOpen.beginElement();
        menuTriggerBottomOpen.beginElement();
    }
    else {
        menuTriggerTopClose.beginElement();
        menuTriggerBottomClose.beginElement();
    }
}