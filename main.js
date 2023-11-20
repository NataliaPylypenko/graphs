// Tabs

function tabs() {

    const tabs = document.querySelectorAll('.tab__item'),
        tabsParent = document.querySelector('.tab__items'),
        tabsContent = document.querySelectorAll('.tab__content');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tab__item_active');
        });
    }

    function showTabContent(i = 1) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('.tab__item'.slice(1))) {
            tabs.forEach((item, i) => {
                if (e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

tabs();

//