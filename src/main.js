const showSidebarBtn = document.getElementById("show-sidebar");
const closeSidebarBtn = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

function closeSidebar(){
    backdrop.classList.add("hidden");
    sidebar.classList.add("hidden");
}

function showSidebar(){
    backdrop.classList.remove("hidden");
    sidebar.classList.remove("hidden");
}

showSidebarBtn.addEventListener("click",showSidebar);
closeSidebarBtn.addEventListener("click",closeSidebar);
backdrop.addEventListener("click",closeSidebar);