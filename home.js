let progressBars = document.querySelectorAll(".inner-bar");
let percentageLabels = document.querySelectorAll(".percentage-label");

for (let i = 0; i < progressBars.length; i++) {
  let progress = progressBars[i].dataset.progress;
  progressBars[i].style.width = progress + "%";
  percentageLabels[i].innerHTML = progress + "%";
}
