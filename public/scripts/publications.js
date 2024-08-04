let minDate = 2010;
let maxDate = 2024;
currentDate = 2024;
selectedDate = 2024;
let dates = 4;
datelist = []
selectedDate = currentDate;

function handleDateClick(date) {
    selectedDate = date;

    document.getElementById(`date${selectedDate}`).style.color = "#A6192E";

    for (let i = 0; i < datelist.length; i++) {
        if (datelist[i] != date) {
            let notdate = datelist[i];
            let notdateElement = document.getElementById(`date${notdate}`);
            if (notdateElement) {
                notdateElement.style.color = "black";
            } else {
                console.error(`Element with ID date${notdate} not found.`);
            }
        }
    }
    
    let dateElement = document.getElementById(`${date}`);
    if (dateElement) {
        dateElement.style.display = "none";
    } else {
        console.error(`Element with ID ${date} not found.`);
    }
    document.getElementById(`${date}`).style.display = "block";
}


function loadDates() {
    let firstDate = currentDate;
    datelist = [];
    for (let i = 0; i < dates; i++) {
        if (firstDate - i >= minDate) {
            datelist.push(firstDate - i)
        }
    }

    if (currentDate < maxDate) {
        document.getElementById("dateSlider").innerHTML = `
    <svg id="leftButton" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-arrow-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onclick="LeftButtonClick()">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8l-4 4l4 4" />
        <path d="M16 12h-8" />
        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    </svg>`;
    }



    for (let i = 0; i < datelist.length; i++) {
        document.getElementById("dateSlider").innerHTML += `
        <div class="date" id="date${datelist[i]}"onclick="handleDateClick(${datelist[i]})" >
            ${datelist[i]}
        </div>`;
    }

    if (currentDate - 4 > minDate) {
        document.getElementById("dateSlider").innerHTML += `
<svg id="rightButton" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-arrow-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onclick="RightButtonClick()">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 16l4 -4l-4 -4" />
    <path d="M8 12h8" />
    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
</svg>`}

}

function RightButtonClick() {
    if (currentDate - 4 > minDate) {
        currentDate -= 4;
        document.getElementById("dateSlider").innerHTML = '';
        loadDates();

    }
}

function LeftButtonClick() {
    if (currentDate < maxDate) {
        currentDate += 4;
        document.getElementById("dateSlider").innerHTML = '';
        loadDates();
    }
}


window.onload = loadDates();
