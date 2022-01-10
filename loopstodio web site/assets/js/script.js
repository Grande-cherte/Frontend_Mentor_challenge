function disp() {
    var menu = document.getElementById('menu-responsive');
    menu.style.display = 'block';
}
document.getElementById("open-menu").addEventListener("click", disp);


function cache() {
    var menu = document.getElementById('menu-responsive');
    menu.style.display = 'none';
}
document.getElementById("close").addEventListener("click", cache);