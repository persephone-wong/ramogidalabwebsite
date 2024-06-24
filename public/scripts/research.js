let scrolls = 0;
let lastScrollPos = 0;



function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const later = function() {
            clearTimeout(timeout);
            func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

scrollFunction = debounce (function () {
    let currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPos > lastScrollPos) {
        scrolls++;
        console.log(scrolls);
        changeResearch();
    } else {
        if (scrolls > 0) {
        scrolls--;}
        console.log(scrolls);
        changeResearch();
    }
    lastScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;

},500);

changeResearch = function () {
    if (scrolls === 0) {
        document.getElementById('research_intro').style.display = 'block';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
    }
    if (scrolls === 1) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'block';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
    }
    if (scrolls === 2) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'block';
        document.getElementById('research_3').style.display = 'none';
    }
    if (scrolls === 3) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'block';
    }
};



window.onscroll = scrollFunction;
