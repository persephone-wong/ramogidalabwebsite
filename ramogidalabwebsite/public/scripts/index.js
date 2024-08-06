console.log('hello world');


var modal = document.getElementById("pageModal");
var modalBtn = document.getElementById("modal_button");
var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 