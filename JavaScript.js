let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let laps = [];

function startPause() {
    let startPauseButton = document.getElementById("startPause");
    if (startPauseButton.innerHTML === "Start") {
        startPauseButton.innerHTML = "Pause";
        timer = setInterval(runStopwatch, 10);
    } else {
        startPauseButton.innerHTML = "Start";
        clearInterval(timer);
    }
}

function runStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("display").innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function reset() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startPause").innerHTML = "Start";
    laps = [];
    document.getElementById("lapList").innerHTML = "";
}

function lap() {
    laps.push(formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds));
    let lapList = document.getElementById("lapList");
    let lapItem = document.createElement("li");
    lapItem.innerHTML = laps[laps.length - 1];
    lapList.appendChild(lapItem);
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}
