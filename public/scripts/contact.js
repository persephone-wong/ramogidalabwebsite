place = "sfu"

document.getElementById('triumf_button').addEventListener('click', function() {
    if (place === "sfu") {
        document.getElementById('sfu_address').style.display = 'none';
        document.getElementById('sfu_map').style.display = 'none';
        document.getElementById('triumf_address').style.display = 'block';
        document.getElementById('triumf_map').style.display = 'block';
        
        document.getElementById('triumf_button').style.backgroundColor = '#47B2D6'
        document.getElementById('triumf_button').style.color = 'white'
        document.getElementById('triumf_button').style.borderColor = '#47B2D6'

        document.getElementById('sfu_button').style.backgroundColor = 'transparent';
        document.getElementById('sfu_button').style.color = 'black';
        document.getElementById('sfu_button').style.borderColor = 'transparent';
        


        place = "triumf";

    }
});

document.getElementById('sfu_button').addEventListener('click', function() {
    if (place === "triumf") {
        document.getElementById('triumf_address').style.display = 'none';
        document.getElementById('triumf_map').style.display = 'none';
        document.getElementById('sfu_address').style.display = 'block';
        document.getElementById('sfu_map').style.display = 'block';

        document.getElementById('sfu_button').style.backgroundColor = '#A6192E'
        document.getElementById('sfu_button').style.color = 'white'
        document.getElementById('sfu_button').style.borderColor = '#A6192E'

        document.getElementById('triumf_button').style.backgroundColor = 'transparent';
        document.getElementById('triumf_button').style.color = 'black';
        document.getElementById('triumf_button').style.borderColor = 'transparent';
        
        place = "sfu";
    }
});
