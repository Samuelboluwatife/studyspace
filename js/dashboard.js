 


// Daily Quote Section
const quotes = [
  '"Success is the sum of small efforts, repeated day in and day out."',
  '"Focus on progress, not perfection."',
  '"Discipline is the bridge between goals and achievement."',
  '"Study hard, for the well is deep, and our brains are shallow."',
  '"Push yourself, because no one else is going to do it for you."'
];

const quoteText = document.getElementById("quoteText");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteText.textContent = randomQuote;



// calender section
const monthYear = document.getElementById("month-year");
const daysContainer = document.querySelector(".days");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const renderCalendar = () => {
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  monthYear.textContent = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  daysContainer.innerHTML = "";

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;

    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      day.classList.add("today");
    }

    daysContainer.appendChild(day);
  }
};

prev.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  date = new Date(currentYear, currentMonth);
  renderCalendar();
});

next.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  date = new Date(currentYear, currentMonth);
  renderCalendar();
});

renderCalendar();
