document.addEventListener('DOMContentLoaded', () => {
    let packages = document.querySelectorAll('.package')
    let tabs = document.querySelectorAll('.packages__info-list__item')
    let currentTab = document.querySelector('.packages__info-list__item.active')
    let animationStatus = false;

    packages.forEach((package) => {
        package.addEventListener('click', () => {

            let tabId = package.getAttribute('data-tab');
            let tab = document.querySelector(tabId);

            deleteActiveClass(tabs)
            deleteActiveClass(packages)

            tab.classList.add('active');
            package.classList.add('active');

            let tlTab = gsap.timeline()

            tlTab
                .set(tab, {
                    opacity: 0,
                })
                .to(tab, {
                opacity: 1,
                duration: 1,
            })
        })
    })

    function deleteActiveClass(elements) {
        elements.forEach((tab) => {
            tab.classList.remove('active')
        })
    }
})