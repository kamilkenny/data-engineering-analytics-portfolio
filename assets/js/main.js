document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", () => {
            document.documentElement.classList.add("navigating");

            setTimeout(() => {
                document.documentElement.classList.remove("navigating");
            }, 400);
        });
    });
});
