function loadingAnimation() {
    var tl = gsap.timeline();
    
    // Animation for h1 elements in .line
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });

    // Animation for #line1-part1 and .line h2 elements
    tl.from("#line1-part1, .line h2", {
        opacity: 0,
        onstart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            var interval = setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                    clearInterval(interval);
                }
            }, 33);
        },
    });

    // Animation for the opacity of .line h2
    tl.to('.line h2', {
        animationName: "anime",
        opacity: 1
    });

    // Fade out the loader
    tl.to("#loader", {
        opacity: 0,
        duration: 0.,
        delay: 0,
    });

    // Animation for page1 visibility
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        duration: 0.6,
        ease: "power4.out"
    });

    // Hide the loader completely
    tl.to("#loader", {
        display: "none"
    });
    tl.from("#nav",{
      opacity:0,
    });
    tl.from("#hero1 h1, #hero2 h1,#hero2 h2,#hero3 h2, #hero4 h1",{
        y:120,
        stagger:0.2,
    })
}
loadingAnimation();

function cursorAnimation() {
    const cursor = document.getElementById("crsr");

    document.addEventListener("mousemove", function (e) {
        // Adjust cursor size and position
        const cursorSize = cursor.offsetWidth; // Get the cursor size
        gsap.to(cursor, {
            left: e.pageX - cursorSize / 2, // Position the cursor to center at the mouse
            top: e.pageY - cursorSize / 2, // Position the cursor to center at the mouse
            ease: "power1.out", // Smooth easing
            duration: 0.1 // Smooth transition
        });
    });

    // Apply the magnetic effect to nav items
    Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();
