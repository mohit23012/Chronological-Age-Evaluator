const icon = document.getElementById("icon");
const settings = document.getElementById("settings");
const initial = document.getElementById("initial");
const second = document.getElementById("second");
second.style.display = "none";
let dobInput = document.getElementById("dob"); // Renamed to dobInput
const submit = document.getElementById("submit");
let flag = 1;

icon.addEventListener("click", () => {
  if (flag == 0) {
    settings.style.display = "block";
    flag = 1;
  } else {
    settings.style.display = "none";
    flag = 0;
  }
});

submit.addEventListener("click", () => {
  let dobvalue = dobInput.value;
  const dob = new Date(dobvalue);

  if (dob) {
    initial.style.display = "none";
    second.style.display = "flex";
  } else {
    initial.style.display = "flex";
    second.style.display = "none";
  }

  const age = () => {
    const currentDate = new Date();
    const diff = currentDate - dob;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(((diff / (1000 * 60 * 60 * 24)) % 365) / 30.44); // Approximate days in a month
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Set the values in the HTML elements
    document.getElementById("year").textContent = years;
    document.getElementById("month").textContent = months;
    document.getElementById("day").textContent = days;
    document.getElementById("Hour").textContent = hours;
    document.getElementById("Min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
  };
  setInterval(() => {
    age();
  }, 1000);
});
