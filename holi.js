const button = document.getElementById("playbtn");
const music = document.getElementById("bgMusic");

// 🎨 Random Color Function
function randomColor() {
    const colors = ["#ff4b2b", "#ffcc00", "#00c9ff", "#92fe9d", "#ff6ec4"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 🎉 Button Click Event
button.addEventListener("click", function() {

    music.volume = 0.4;
    music.play();

    // Background Change
    document.body.style.background = randomColor();

    // Splash Circle
    const circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.width = "150px";
    circle.style.height = "150px";
    circle.style.background = randomColor();
    circle.style.borderRadius = "50%";
    circle.style.top = Math.random() * window.innerHeight + "px";
    circle.style.left = Math.random() * window.innerWidth + "px";
    circle.style.opacity = "0.7";
    circle.style.transition = "0.5s";

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1000);

    // 🎊 Confetti
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
});


// 🌈 Particle Follow Function
function createParticle(x, y) {
    const particle = document.createElement("div");

    particle.style.position = "absolute";
    particle.style.width = "8px";
    particle.style.height = "8px";
    particle.style.background = randomColor();
    particle.style.borderRadius = "50%";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.pointerEvents = "none";
    particle.style.opacity = "0.8";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 400);
}

// 🖱 Desktop Support
document.addEventListener("mousemove", function(e) {
    createParticle(e.pageX, e.pageY);
});

// 📱 Mobile Support
document.addEventListener("touchmove", function(e) {
    const touch = e.touches[0];
    createParticle(touch.pageX, touch.pageY);
});