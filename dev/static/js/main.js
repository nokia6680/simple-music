document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');
    let currentPageHeight = 0;
    const pageHeight = 1122; // Примерная высота страницы A4 в пикселях при 96 DPI

    items.forEach((item, index) => {
        const itemHeight = item.offsetHeight;
        console.log(itemHeight);
        // Проверяем, превышает ли добавление этого элемента высоту страницы
        if (currentPageHeight + itemHeight > pageHeight) {
            // Добавляем класс 'page-break' к предыдущему элементу, чтобы начать новую страницу
            if (index > 0) items[index - 1].classList.add('page-break');

            // Сбрасываем счётчик высоты для новой страницы
            currentPageHeight = itemHeight;
            console.log(currentPageHeight);
        } else {
            // Если не превышает, просто добавляем высоту элемента к текущей "странице"
            currentPageHeight += itemHeight;
        }
    });
});

const options = {
    margin: 1,
    filename: 'codepen-test.pdf',
    image: {
        type: 'jpeg',
        quality: 1
    },
    html2canvas: {
        scale: 1
    },
    jsPDF: {
        format: 'a4',
        orientation: 'portrait',
        putOnlyUsedFonts: true,
    },

    pagebreak: { after: '.item', avoid: 'table' }
}

$('.js-html-to-pdf').click(function (e) {
    e.preventDefault();
    const element = document.getElementById('wrapper');
    html2pdf().from(element).set(options).save();
});