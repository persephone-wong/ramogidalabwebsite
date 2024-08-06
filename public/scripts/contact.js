place = "sfu"
student_type = "graduate"

document.getElementById('triumf_button').addEventListener('click', function() {
    if (place === "sfu") {
        document.getElementById('sfu_address').style.display = 'none';
        document.getElementById('sfu_map').style.display = 'none';
        document.getElementById('triumf_address').style.display = 'block';
        document.getElementById('triumf_map').style.display = 'block';

        document.getElementById('triumf_button').style.backgroundColor = '#47B2D6';
        document.getElementById('triumf_button').style.color = 'white';
        document.getElementById('triumf_button').style.borderColor = '#47B2D6';
        
        



        document.getElementById('sfu_button').style.backgroundColor = 'transparent';
        document.getElementById('sfu_button').style.color = 'black';
        document.getElementById('sfu_button').style.borderColor = 'black';
        document.getElementById('sfu_button').addEventListener('mouseover', function() {
            document.getElementById('sfu_map').style.backgroundColor = '#A6192E';
            document.getElementById('sfu_map').style.color = 'white';
        });

        


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
        document.getElementById('triumf_button').style.borderColor = 'black';
        
        place = "sfu";
    }
});

document.getElementById('undergrad_button').addEventListener('click', function() {
    if (student_type === "graduate") {
        document.getElementById('graduate_info').style.display = 'none';
        document.getElementById('undergrad_info').style.display = 'block';
        student_type = "undergraduate";

        document.getElementById('undergrad_button').style.backgroundColor = '#F19C33'
        document.getElementById('undergrad_button').style.color = 'white'
        document.getElementById('undergrad_button').style.borderColor = '#F19C33'
        
        document.getElementById('graduate_button').style.backgroundColor = 'transparent';
        document.getElementById('graduate_button').style.color = 'black';
        document.getElementById('graduate_button').style.borderColor = 'black';

    }});

document.getElementById('graduate_button').addEventListener('click', function() {
    if (student_type === "undergraduate") {
        document.getElementById('undergrad_info').style.display = 'none';
        document.getElementById('graduate_info').style.display = 'block';
        student_type = "graduate";

        document.getElementById('graduate_button').style.backgroundColor = '#138C82'
        document.getElementById('graduate_button').style.color = 'white'
        document.getElementById('graduate_button').style.borderColor = '#138C82'

        document.getElementById('undergrad_button').style.backgroundColor = 'transparent';
        document.getElementById('undergrad_button').style.color = 'black';
        document.getElementById('undergrad_button').style.borderColor = 'black';
    }
});