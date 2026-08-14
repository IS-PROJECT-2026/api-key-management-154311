const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const menuToggle = document.getElementById("menuToggle");
const sidebarClose = document.getElementById("sidebarClose");

const pageTitle = document.getElementById("pageTitle");
const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");

const navItems = document.querySelectorAll(".nav-item[data-page]");


function openSidebar() {
    sidebar.classList.add("open");
    sidebarBackdrop.classList.add("visible");
}


function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarBackdrop.classList.remove("visible");
}


menuToggle.addEventListener("click", openSidebar);

sidebarClose.addEventListener("click", closeSidebar);

sidebarBackdrop.addEventListener("click", closeSidebar);


navItems.forEach((item) => {

    item.addEventListener("click", (event) => {

        event.preventDefault();

        const page = item.dataset.page;

        navItems.forEach((navItem) => {
            navItem.classList.remove("active");
        });

        item.classList.add("active");

        pageTitle.textContent = page;
        breadcrumbCurrent.textContent = page;

        closeSidebar();
    });

});