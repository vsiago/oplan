window.addEventListener("scroll", function(){
    if (window.scrollY > window.screen.availHeight - 100 + 450) {
    const servicesMenu = document.querySelector('#servicesMenu')
    servicesMenu.style.position = 'fixed';
    servicesMenu.style.top = '0';
    servicesMenu.style.width = '100%';

    } else {
        servicesMenu.style.position = 'static'
    }
})