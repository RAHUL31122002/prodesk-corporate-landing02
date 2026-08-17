const menuToggle = document.querySelector(".navbar__toggle");
const navigation = document.querySelector(".navbar__nav");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    const navigationLinks =
        document.querySelectorAll(".navbar__link");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}