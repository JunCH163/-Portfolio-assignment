document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    let sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => {
        observer.observe(section);
    });

    document.querySelectorAll('.scroll-section').forEach((section, index) => {
        section.addEventListener('wheel', (event) => {
            event.preventDefault();
            if (event.deltaY > 0) {
                if (index < sections.length - 1) {
                    sections[index + 1].scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                if (index > 0) {
                    sections[index - 1].scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    let firstSection = document.querySelector('.scroll-section');
    firstSection.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    });
});

