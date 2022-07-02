const navToggle = document.querySelector('.nav__toggle--container');
const nav = document.querySelector('.nav')
const navList = nav.querySelector('.nav__list')
const overlay = document.querySelector('.overlay')
const arrow = [...navList.querySelectorAll('.arrow')]

navToggle.addEventListener('click', e => {
    nav.classList.toggle('open')
    overlay.classList.toggle('open')
})

const hideMenu = (menu) => {
    const dropMenu = menu.querySelector('.drop-menu')
    menu.classList.remove('selected')
    dropMenu.style.height = null
}

const revealMenu = (menu) => {
    const dropMenu = menu.querySelector('.drop-menu')
    menu.classList.add('selected')
    dropMenu.style.height = `${dropMenu.scrollHeight}px`
}

arrow.forEach((menu) => {
    const dropMenu = menu.querySelector('.drop-menu')
    menu.addEventListener('click', (e) => {
        if (dropMenu.style.height) {
            hideMenu(menu)
        } else {
            arrow.forEach((menu) => hideMenu(menu))
            revealMenu(menu)
        }
    })
})
