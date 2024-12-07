document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".vote-btn");
    const confirmation = document.querySelector(".vote-confirmation");

    voteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const gameName = event.target
                .closest(".card")
                .querySelector("h2").innerText;
            confirmation.querySelector("strong").innerText = gameName;
            confirmation.style.display = "block";
        });
    });
});
