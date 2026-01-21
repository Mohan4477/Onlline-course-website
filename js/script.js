

// menu toggle
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});


// form validation
const form = document.getElementById("contactform");

if(form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();


        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        const error = document.getElementById("error");
        const success = document.getElementById("success");

        error.textContent = "";
        success.textContent = "";

        if(name === "" || email === "") {
            error.textContent = "All fields are required!";
            return;
        }

        if(!email.includes("@")) {
            error.textContent = "Please enter valid email address";
            return;
        }

        success.textContent = "Form submitted successfully!";
        form.reset();
    });
}