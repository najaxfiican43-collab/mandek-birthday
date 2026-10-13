function openPresent() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("letter").classList.remove("hidden");
}


function celebrate() {

    document.getElementById("letter").style.display = "none";

    document.getElementById("surprise").classList.remove("hidden");

    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["💗", "✨", "🎉", "💕", "🌸"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                { transform: "translateY(0)" },
                { transform: "translateY(110vh) rotate(360deg)" }
            ],
            {
                duration: 3000 + Math.random() * 3000,
                easing: "linear"
            }
        );
    }
}