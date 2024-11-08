document.addEventListener("DOMContentLoaded", () => {
    let colors = ["#FF5733", "#FFBD33", "#75FF33", "#33FFF5", "#3375FF", "#A833FF"];
    setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 500); // Changes color every 0.5 seconds
});
