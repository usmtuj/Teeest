const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const isActive = item.classList.contains('active');

        if (isActive) {
            content.style.maxHeight = 0;
            item.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            item.classList.add('active');
        }
    });
});