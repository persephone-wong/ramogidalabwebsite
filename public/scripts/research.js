let scrolls = 0;
let shouldChangeResearch = true;

changeResearch = function () {
    if (scrolls === 0) {
        document.getElementById('research_intro').style.display = 'block';
        document.getElementById('research_dot_0_blank').style.display = 'none';
        document.getElementById('research_dot_0_filled').style.display = 'block';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1_blank').style.display = 'block';
        document.getElementById('research_dot_1_filled').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2_blank').style.display = 'block';
        document.getElementById('research_dot_2_filled').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3_blank').style.display = 'block';
        document.getElementById('research_dot_3_filled').style.display = 'none';
        
    }
    if (scrolls === 1) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_0_blank').style.display = 'block';
        document.getElementById('research_dot_0_filled').style.display = 'none';
        document.getElementById('research_1').style.display = 'block';
        document.getElementById('research_dot_1_blank').style.display = 'none';
        document.getElementById('research_dot_1_filled').style.display = 'block';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2_blank').style.display = 'block';
        document.getElementById('research_dot_2_filled').style.display = 'none';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3_blank').style.display = 'block';
        document.getElementById('research_dot_3_filled').style.display = 'none';
    }
    if (scrolls === 2) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_0_blank').style.display = 'block';
        document.getElementById('research_dot_0_filled').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1_blank').style.display = 'block';
        document.getElementById('research_dot_1_filled').style.display = 'none';
        document.getElementById('research_2').style.display = 'block';
        document.getElementById('research_dot_2_blank').style.display = 'none';
        document.getElementById('research_dot_2_filled').style.display = 'block';
        document.getElementById('research_3').style.display = 'none';
        document.getElementById('research_dot_3_blank').style.display = 'block';
        document.getElementById('research_dot_3_filled').style.display = 'none';
    }
    if (scrolls === 3) {
        document.getElementById('research_intro').style.display = 'none';
        document.getElementById('research_dot_0_blank').style.display = 'block';
        document.getElementById('research_dot_0_filled').style.display = 'none';
        document.getElementById('research_1').style.display = 'none';
        document.getElementById('research_dot_1_blank').style.display = 'block';
        document.getElementById('research_dot_1_filled').style.display = 'none';
        document.getElementById('research_2').style.display = 'none';
        document.getElementById('research_dot_2_blank').style.display = 'block';
        document.getElementById('research_dot_2_filled').style.display = 'none';
        document.getElementById('research_3').style.display = 'block';
        document.getElementById('research_dot_3_blank').style.display = 'none';
        document.getElementById('research_dot_3_filled').style.display = 'block';
    }
}


function setupDotClicks() {
    document.getElementById('research_dot_0_blank').onclick = function() {
        scrolls = 0;
        console.log("clicked")
        changeResearch();
    };
    document.getElementById('research_dot_1_blank').onclick = function() {
        scrolls = 1;
        console.log("clicked")
        changeResearch();
    };
    document.getElementById('research_dot_2_blank').onclick = function() {
        scrolls = 2;
        console.log("clicked")
        changeResearch()
        ;
    };
    document.getElementById('research_dot_3_blank').onclick = function() {
        scrolls = 3;
        console.log("clicked")
        changeResearch();
    };
}



window.onload = function() {
    setupDotClicks();
};

