// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

console.log('yay')

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger)
    const portfolioAnchors = document.querySelectorAll(".portfolio_anchor");
    portfolioAnchors.forEach( (anchor) => {
        const state = Flip.getState(anchor, { props: "backgroundColor,color" }); // Get the current state
        anchor.addEventListener("click", () => {
            anchor.classList.toggle("is-active");
            Flip.from(state, {
                duration: 1,
                ease: "power1.inOut",
                absolute: true,
                onComplete: myFunc,
            });
            console.log("flipped")
        })
    })
});