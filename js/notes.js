// Retrieve notes or initialize empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteForm = document.getElementById("noteForm");
const notesContainer = document.getElementById("notesContainer");

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Render all notes on the screen
function renderNotes() {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
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



  notes.forEach(note => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button class="delete-note" onclick="deleteNote(${note.id})">Delete</button>
    `;

    notesContainer.appendChild(noteCard);
  });
}

// Add a new note
noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  if (title && content) {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    };

    notes.push(newNote);
    saveNotes();
    renderNotes();

    noteForm.reset();
  }
});

// Delete a note
function deleteNote(noteId) {
  notes = notes.filter(note => note.id !== noteId);
  saveNotes();
  renderNotes();
}

// Initialize
renderNotes();


