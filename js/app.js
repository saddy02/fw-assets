let menuHide = true
function burgerMenu(){
    if (menuHide){
        document.getElementById('toggle').innerHTML = `<i class="bi bi-x-lg"></i>`
        document.querySelector('.wrapper header nav ul').style = 'margin-right: 0px;'
        menuHide = false
    }
    else{
        document.getElementById('toggle').innerHTML = `<i class="bi bi bi-list"></i>`
        document.querySelector('.wrapper header nav ul').style = 'margin-right: -400px;'
        menuHide = true
    }
}