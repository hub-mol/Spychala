// document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(Flip)

    const gallery = document.querySelector(".portfolio_gallery");
    const totalNumber = gallery.childElementCount

    const portfolioAnchors = document.querySelectorAll(".portfolio_anchor");
    portfolioAnchors.forEach((anchor) => {
        let currentNumber = 0;
        while( (child = child.previousSibling) != null )
            currentNumber++;
        anchor.querySelector(".is-count").innerText =  "/" + totalNumber;
        anchor.addEventListener("click", () => {
            if (anchor.classList.contains("active")) return;

            const child = anchor.querySelector(".portfolio_slide")

            const state = Flip.getState(child, { props: "padding, top, left, bottom, right, gap" });
            child.classList.toggle("is-active");
            document.body.classList.toggle("stop-scrolling");
            Flip.from(state, {
                duration: 1,
                ease: "power1.inOut",
            });
        })
    })

//});