let scrolls = 0;
let lastScrollPos = 0;
let shouldChangeResearch = true;


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

scrollFunction = debounce(function () {
    if (!shouldChangeResearch) {
        return;
    };

    let currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPos > lastScrollPos) {
        if (scrolls < 3) {
        scrolls++;
        console.log(scrolls);
        changeResearch();}
    } else if (currentScrollPos < lastScrollPos) {
        if (scrolls > 0) {
            scrolls--;
            changeResearch();
        }        
    }
    if (currentScrollPos = lastScrollPos) {
        return;
    }
    lastScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;
    shouldChangeResearch = false;
    setTimeout(() => {
        shouldChangeResearch = true;
    }, 500);
}, 100);

changeResearch = function () {
    if (scrolls === 0) {
        document.getElementById('research_intro').style.display = 'block';
        document.getElementById('research_dot_intro').style.display = 'block';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3').style.display = 'none';
        
    }
    if (scrolls === 1) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'block';
        document.getElementById('research_dot_1').style.display = 'block';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3').style.display = 'none';
    }
    if (scrolls === 2) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'block';
        document.getElementById('research_dot_2').style.display = 'block';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3').style.display = 'none';
    }
    if (scrolls === 3) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_intro').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2').style.display = 'none';
        document.getElementById('research_3').style.display = 'block';
        document.getElementById('research_dot_3').style.display = 'block';
    }
    shouldChangeResearch = false;
    window.scrollTo(0, 100);
    lastScrollPos = window.scrollY
    setTimeout(() => {
        shouldChangeResearch = true;
    }, 500);


};



window.onscroll = scrollFunction;
