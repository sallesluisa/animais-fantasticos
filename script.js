const tabMenu = document.querySelectorAll(".js_tabmenu li");
const tabContent = document.querySelectorAll(".js_tabcontent section");
if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
