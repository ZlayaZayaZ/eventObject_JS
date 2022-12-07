const tabs = document.querySelectorAll('.tab'),
listTabs = Array.from(tabs),
tabContents = document.querySelectorAll('.tab__content')

tabs.forEach(function(tab) {
    tab.onclick = () => {
        
        index = listTabs.indexOf(document.querySelector('.tab_active'))
        tabs[index].className = 'tab'
        tabContents[index].className = 'tab__content'

        tab.classList.add('tab_active')
        indexNew = listTabs.indexOf(tab)
        tabContents[indexNew].classList.add('tab__content_active')     
    }
  });
