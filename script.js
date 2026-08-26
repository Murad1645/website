/* =========================
   MOBILE MENU
========================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const menu = document.querySelector(".menu");

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


/* =========================
   FAQ
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        const isActive = currentItem.classList.contains("active");


        document.querySelectorAll(".faq-item").forEach(function (item) {

            item.classList.remove("active");

            const plus = item.querySelector(".faq-question span");

            if (plus) {
                plus.textContent = "+";
            }

        });


        if (!isActive) {

            currentItem.classList.add("active");

            const plus = question.querySelector("span");

            if (plus) {
                plus.textContent = "−";
            }

        }

    });

});


/* =========================
   ORDER BUTTON
========================= */

const orderButton = document.getElementById("orderButton");


/*
    এখানে আপনার Google Form URL বসাবেন।

    Example:

    const googleFormURL =
    "https://docs.google.com/forms/d/e/XXXXXXXX/viewform";

*/

const googleFormURL = "YOUR_GOOGLE_FORM_LINK";


if (orderButton) {

    orderButton.addEventListener("click", function (event) {

        if (
            googleFormURL === "YOUR_GOOGLE_FORM_LINK" ||
            googleFormURL.trim() === ""
        ) {

            event.preventDefault();

            alert(
                "Google Form link এখনো যোগ করা হয়নি। " +
                "index.html অথবা script.js-এ আপনার Google Form link বসান।"
            );

        }

    });

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        "© " + currentYear +
        " Skill Station. All Rights Reserved.";

}