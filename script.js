document.getElementById("themeToggle").addEventListener("click", () =>
    {
    document.body.classList.toggle("dark-theme");
    });
    document.getElementById("contactForm").addEventListener("submit", (e)=> 
    {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message =
    document.getElementById("messageInput").value.trim();
    if (name === "" || message === "") {
    alert("Please fill out all fields.");
    } else {
    document.getElementById("response").innerText = `Thanks, ${name}.We'll get back to you soon!`;
    // Optional: reset form
    e.target.reset();
    }
    });
    document.getElementById("loadUsersBtn").addEventListener("click",
        async () => {
        try {
        const res = await
        fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
        });
        } catch (err) {
        console.error("Failed to load users:", err);
        }
        });
        document.querySelectorAll(".question").forEach((q) => {
            q.addEventListener("click", () => {
            q.nextElementSibling.classList.toggle("visible");
            });
            });

            window.onscroll = function () {
                const button = document.getElementById("backToTop");
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                  button.style.display = "block";
                } else {
                  button.style.display = "none";
                }
              };
            
              document.getElementById("backToTop").onclick = function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };

              function updateClock() {
                const now = new Date();
                const timeString = now.toLocaleTimeString();
                document.getElementById("clock").textContent = timeString;
              }
            
              // Initial call and set interval
              updateClock();
              setInterval(updateClock, 1000);
