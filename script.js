const menu = document.querySelector('#menu-mobile')
const icone_menu = document.querySelector('.icone-menu')
const exit = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    menu.classList.remove('display-menu')
}

function fecharMenuMobile() {
    menu.classList.add('display-menu')
}

icone_menu.onclick = abrirMenuMobile
exit.onclick = fecharMenuMobile