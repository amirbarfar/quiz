const sidebar = document.getElementById('sidebar')
const close = document.getElementById('close-sidebar')
const menu = document.getElementById('show-sidebar')
const backdrop = document.getElementById("backdrop");


menu.addEventListener('click', () => {
    sidebar.style.opacity = '100%'
    sidebar.style.translate = 0;
})

close.addEventListener('click', () => {
    sidebar.style.opacity = 0
    sidebar.style.translate = "100%";
})