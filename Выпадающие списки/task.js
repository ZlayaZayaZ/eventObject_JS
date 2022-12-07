let value = document.querySelector('.dropdown__value')
const items = document.querySelectorAll('.dropdown__item')

function clickValue() {
    const parent = value.closest('.dropdown')
    const child = parent.querySelector('ul')

    if (child.className == 'dropdown__list dropdown__list_active') {
        child.className = 'dropdown__list'      
    } else {
        child.className = 'dropdown__list dropdown__list_active'
    }
}

value.onclick = clickValue

items.forEach(function(item) {
    item.onclick = () => {
                const child = item.querySelector('.dropdown__link')
                value.textContent = child.textContent
                clickValue()
                return false
            }
  });
