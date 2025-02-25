// hide all answer (default)
document.querySelectorAll(".questions p").forEach(p => {
    p.style.display = "none";
});

document.querySelectorAll('.questions div[name="question"]').forEach(div => {
    div.addEventListener("click", function () {
        const questionID = this.id;
        const answer = document.querySelector(`p[id="${questionID}"]`);
        const img = this.querySelector("img");

        // hide answer that isn't clicked/selected
        document.querySelectorAll(".questions p").forEach(p => {
            if (p !== answer) {
                p.style.display = "none";
            }
        });

        document.querySelectorAll('.questions div[name="question"] img').forEach(image => {
            if (image !== img) {
                image.classList.remove("minus");
            }
        });

        // show the selected answer and image
        if (answer.style.display === "block") {
            answer.style.display = "none";
            img.classList.remove("minus");
        } else {
            answer.style.display = "block";
            img.classList.add("minus");
        }
    });
});
