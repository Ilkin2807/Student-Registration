
// Function to handle form submission
var registeredStudents = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123456789",
        speciality: "Computer Science",
        faculty: "Faculty of Engineering",
        password: "password123"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        phone: "987654321",
        speciality: "Biology",
        faculty: "Faculty of Science",
        password: "mypassword"
    }
];

// Function to handle form submission
function registerStudent(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var speciality = document.getElementById('speciality').value;
    var faculty = document.getElementById('faculty').value;
    var password = document.getElementById('password').value;

    // Create an object to store student data
    var student = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        speciality: speciality,
        faculty: faculty,
        password: password
    };

    // Add student to the registered students array
    registeredStudents.push(student);
    console.log("added")

    // Clear form inputs
    document.getElementById('registrationForm').reset();
    localStorage.setItem('registeredStudents', JSON.stringify(registeredStudents));

    // Redirect to login page
    window.location.href = 'login.html';
}

// Function to handle login form submission
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if entered email and password match the registered student
    var loggedIn = false;
    console.log("skjsjhd")

    for (var i = 0; i < registeredStudents.length; i++) {

        var student = registeredStudents[i];
        if (student.email == email && student.password == password) {
            loggedIn = true;
            console.log(password)
            console.log(email);
            break;
        }
    }


    // Display login status message
    if (loggedIn) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
    }

    // Clear form inputs
    document.getElementById('loginForm').reset();
}