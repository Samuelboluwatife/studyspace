 const hamburger = document.querySelector(".hamburger")


function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
}


window.addEventListener('click', (event) => {
  // If sidebar is open AND the click is NOT inside sidebar or hamburger
  if (
    document.querySelector('.sidebar').classList.contains('active') &&
    !document.querySelector('.sidebar').contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    closeSidebar();
  }
})
