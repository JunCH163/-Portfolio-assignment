function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    var tablinks = document.getElementsByClassName("tab-link");

    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-tab");
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.classList.add("active");
}

function showContent(id) {
    const contents = document.querySelectorAll('.timeline-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';

    const steps = document.querySelectorAll('.timeline-event');
    steps.forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`.timeline-event[data-id="${id}"]`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});
