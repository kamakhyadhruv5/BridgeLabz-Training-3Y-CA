
const API = "http://localhost:3005/timetable";

const daySelect = document.getElementById("day");
const timetable = document.getElementById("timetable");

// Fetch timetable for the selected day.
async function loadTimetable() {

    let selectedDay = daySelect.value;

    timetable.textContent = "Loading timetable...";

    try {

        // Send GET request with day query parameter.
        let response = await fetch(
            API + "?day=" + encodeURIComponent(selectedDay)
        );

        if (!response.ok) {
            throw new Error("Unable to fetch timetable.");
        }

        let classes = await response.json();

        timetable.innerHTML = "";

        // Check if classes exist.
        if (classes.length === 0) {

            timetable.textContent = "No classes today.";
            return;
        }

        // Dynamically render all classes.
        classes.forEach(function (item) {

            let card = document.createElement("article");
            card.className = "class-item";

            let subject = document.createElement("h3");
            subject.textContent = item.subject;

            let faculty = document.createElement("p");
            faculty.textContent = "Faculty: " + item.faculty;

            let time = document.createElement("p");
            time.textContent = "Time: " + item.time;

            card.append(subject, faculty, time);

            timetable.appendChild(card);
        });

    } catch (error) {

        timetable.textContent = error.message;

    }
}

// Reload timetable whenever dropdown changes.
daySelect.addEventListener("change", loadTimetable);

// Load Monday initially.
loadTimetable();
