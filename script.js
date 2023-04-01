document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
      gsap.fromTo(
        button,
        {
          "--hand-rotate": 8
        },
        {
          ease: "none",
          keyframes: [
            {
              "--hand-rotate": -45,
              duration: 0.16,
              ease: "none"
            },
            {
              "--hand-rotate": 15,
              duration: 0.12,
              ease: "none"
            },
            {
              "--hand-rotate": 0,
              duration: 0.2,
              ease: "none",
              clearProps: true
            }
          ]
        }
      );
    }
  });
});
