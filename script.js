const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name === '' || email === '' || password === '') {
        alert("Please fill in all fields");
    } else {
        alert("Signup successful!");
        window.location.href = "testing.html"; // Redirect to the homepage after successful signup
    }
});

document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (email === '' || password === '') {
        alert("Please enter your email and password.");
    } else {
        alert("Sign in successful!");
        window.location.href = "testing.html"; // Redirect to the homepage after successful sign in
    }
});
