let users = JSON.parse(localStorage.getItem('users')) || [];

// Show Sign Up Form
function showSignup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("game-selection").style.display = "none";
}

// Show Login Form
function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("game-selection").style.display = "none";
}

// Sign up function
function signup(event) {
    event.preventDefault();
    
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    // Error handling for existing username or email
    if (users.some(user => user.username === username)) {
        document.getElementById("signup-error").innerText = "Username already exists!";
        return;
    }

    if (users.some(user => user.email === email)) {
        document.getElementById("signup-error").innerText = "Email is already in use!";
        return;
    }

    // Add new user to the mock database
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Sign Up Successful!");
    showLogin();
}

// Login function
function login(event) {
    event.preventDefault();
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    // Check if user exists and password matches
    let user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Login Successful!");
        showGameSelection();
    } else {
        document.getElementById("login-error").innerText = "Invalid username or password!";
    }
}

// Show game selection page
function showGameSelection() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("game-selection").style.display = "block";
}

// Logout function
function logout() {
    document.getElementById("game-selection").style.display = "none";
    showLogin();
}
