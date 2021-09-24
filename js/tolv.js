const header = document.querySelector("header");

const onScroll = () => {
    console.log("scrolled");
    if (scrollY === 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    } else {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.2)"
    }
}

window.addEventListener("scroll", onScroll);