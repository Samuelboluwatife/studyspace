// Retrieve notes or initialize empty array
let course = JSON.parse(localStorage.getItem("course")) || [];

const courseForm = document.getElementById("courseForm");
const courseContainer = document.getElementById("courseContainer");

// Save notes to localStorage
function saveCourse() {
  localStorage.setItem("course", JSON.stringify(course));
}

// Render all notes on the screen
function renderCourse() {
  courseContainer.innerHTML = "";

  if (course.length === 0) {
  const messagedisplay = document.querySelector(".message");
   const cancelbutton = document.querySelector(".cancelbtn");
    messagedisplay.style.display = "block"
     document.body.classList.add("blurred");

    cancelbutton.addEventListener("click", () => {
    messagedisplay.style.display = "none";
    document.body.classList.remove("blurred")
    setTimeout(() => message.remove(), 300);
});
    return;
  }



  course.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
    <div>
      <h3>${course.title}</h3>
      <p>${course.tutor}</p>
    </div>
    <div>
    <h4 id="units">${course.unit}</h4>
    <h4>${course.status}</h4>
    </div>
      <button class="delete-course" onclick="deleteCourse(${course.id})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg></button>
    `;

    courseContainer.appendChild(courseCard);
  });
}

// Add a new note
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("courseTitle").value.trim();
  const tutor = document.getElementById("coursetutor").value.trim();
   const unit = document.getElementById("unit").value.trim();
    const status = document.getElementById("status").value.trim();

  if (title && tutor && unit && status) {
    const newCourse = {
      id: Date.now(),
      title: title,
      tutor: tutor,
      unit: unit,
      status: status
    };

    course.push(newCourse);
    saveCourse();
    renderCourse();

    courseForm.reset();
  }
});

// Delete a note
function deleteCourse(courseId) {
  course = course.filter(course => course.id !== courseId);
 saveCourse();
    renderCourse();
}

// Initialize
renderCourse()