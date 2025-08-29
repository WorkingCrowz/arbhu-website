"""document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = question.querySelector('.toggle-icon');

        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.toggle-icon').textContent = '+';
            }

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});
"""

# Write files
with open('/mnt/data/index4_separated.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('/mnt/data/styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

with open('/mnt/data/script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

'/mnt/data/index4_separated.html', '/mnt/data/styles.css', '/mnt/data/script.js'
