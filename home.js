let progressBars = document.querySelectorAll(".inner-bar");
let percentageLabels = document.querySelectorAll(".percentage-label");

for (let i = 0; i < progressBars.length; i++) {
  let progress = progressBars[i].dataset.progress;
  progressBars[i].style.width = progress + "%";
  percentageLabels[i].innerHTML = progress + "%";
}

// tab
function openCity(evt, categoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
