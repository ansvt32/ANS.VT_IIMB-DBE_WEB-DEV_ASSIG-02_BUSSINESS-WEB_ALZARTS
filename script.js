// Mobile Menu
function toggleMenu() {
    const m = document.getElementById("mobileMenu");
    m.classList.toggle("open");
}
function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.12 }
);
reveals.forEach((el) => obs.observe(el));

// Floating Petals
const container = document.getElementById("petals");
const petalEmojis = [
    "\uD83C\uDF38",
    "\uD83C\uDF3A",
    "\uD83C\uDF37",
    "\u273F",
    "\u2764",
    "\uD83C\uDF39",
];
for (let i = 0; i < 12; i++) {
    const p = document.createElement("div");
    p.classList.add("petal");
    p.textContent = petalEmojis[i % petalEmojis.length];
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 12 + Math.random() * 14 + "s";
    p.style.animationDelay = Math.random() * 12 + "s";
    p.style.fontSize = 0.9 + Math.random() * 1.2 + "rem";
    container.appendChild(p);
}

// WhatsApp Order
function handleOrder() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const occasion = document.getElementById("occasion").value;
    const message = document.getElementById("message").value;
    const text = encodeURIComponent(
        "Hi ALZARTS!     Name: " +
            (name || "Not provided") +
            "\nPhone: " +
            (phone || "Not provided") +
            "\nOccasion: " +
            (occasion || "Not specified") +
            "\n\nMessage:\n" +
            (message || "No message")
    );
    window.open("https://wa.me/918129085598?text=" + text, "_blank");
}
