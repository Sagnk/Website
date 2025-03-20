// Header Scroll
// Select the navbar
let nav = document.querySelector(".navbar");

// Check if the navbar exists
if (nav) {
    // Add scroll event listener
    window.addEventListener("scroll", function () {
        // Use window.scrollY for cross-browser compatibility
        if (window.scrollY > 20) {
            nav.classList.add("header-scrolled");
        } else {
            nav.classList.remove("header-scrolled");
        }
    });
}

// Select all navbar links and the navbar collapse element
let navbarLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

// Check if the navbar collapse element exists
if (navCollapse) {
    // Add click event listeners to each link
    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navCollapse.classList.remove("show"); // Collapse the navbar on link click
        });
    });
}

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            let name = document.getElementById("name").value.trim();
            let number = document.getElementById("number").value.trim();
            let email = document.getElementById("emailInput").value.trim();
            let message = document.getElementById("message").value.trim();

            // Simple validation
            if (!name || !number || !email || !message) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Validate phone number format (e.g., +91 98300 55942 or +919830055942)
            // This regex allows for optional spaces or dashes after the country code
            if (!/^\+91\s?\d{5}\s?\d{5}$/.test(number)) {
                alert("Please enter a valid phone number in the format: +91 XXXXX XXXXX");
                return;
            }      
            // Validate email format
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Disable button to prevent multiple submissions
            const submitButton = contactForm.querySelector("button[type='submit']");
            submitButton.disabled = true;
            submitButton.innerText = "Submitting...";

            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    alert("Your message has been sent successfully!");
                    contactForm.reset();
                } else {
                    alert("There was an error sending your message. Please try again.");
                }
            })
            .catch(error => {
                alert("There was an error sending your message. Please try again.");
                console.error('Error:', error);
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerText = "Submit";
            });
        });
    }
});
//Analyhstucs
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;


document.querySelectorAll('a[href="#contact"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
