// Theme Toggle (index.html & contact.html)
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

// Contact Form Validation (contact.html)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
      e.target.reset(); // optional reset
    }
  });
}

// Fetch API: Load Users (index.html)
const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const userList = document.getElementById("userList");

      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  });
}

// FAQ Toggle (index.html)
document.querySelectorAll(".question").forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
  });
});

// Real-Time Clock (index.html & contact.html)
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = timeString;
}

updateClock(); // Initial run
setInterval(updateClock, 1000); // Update every second

// ⬆️ Back to Top Button (all pages)
window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (button) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
};

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// 🖼️ Optional: Image Slider (index.html)
const sliderImages = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
];
let currentImage = 0;

function changeSliderImage() {
  const sliderImage = document.getElementById("sliderImage");
  if (sliderImage && sliderImages.length > 0) {
    currentImage = (currentImage + 1) % sliderImages.length;
    sliderImage.src = sliderImages[currentImage];
  }
}

setInterval(changeSliderImage, 5000); // Change image every 5 seconds

