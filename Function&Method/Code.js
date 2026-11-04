
let chapters = [
    "It was midnight. Everyone was sleeping. Suddenly, a strange sound came from Room 13...",

    "A girl named Priya woke up and heard someone calling her name from the empty corridor...",

    "She opened the door. Nobody was there, but bloody footprints appeared on the floor...",

    "Suddenly, the hostel lights went off. Someone whispered behind her: YOU ARE NEXT!",

    "The next morning, Room 13 was locked. Priya had disappeared forever..."
];

let currentChapter = 0;

function startStory() {
    document.querySelector(".story").scrollIntoView({
        behavior: "smooth"
    });
}

function nextStory() {
    currentChapter++;

    if (currentChapter < chapters.length) {
        document.getElementById("storyText").innerText =
            chapters[currentChapter];
    } else {
        document.getElementById("storyText").innerText =
            "THE END... OR IS IT? 👻";

        currentChapter = -1;
    }
}
