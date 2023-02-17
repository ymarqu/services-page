const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
    overlay.classList.add("open-modal")
    console.log(btn.parentElement)
    })})

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open-modal");
})
