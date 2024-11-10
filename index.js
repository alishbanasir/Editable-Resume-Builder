var resumeform = document.getElementById("resumeform");
var resumeoutput = document.getElementById("resumeoutput");
function generateResume(data) {
    return "\n    <h2><b>Congrats your First Generated!</b></h2>\n    \n   ".concat(data.image
        ? "<img src=\"".concat(data.image, "\" alt=\"Profile Image\" style=\"width=\"150px\"  border: 2px solid black;\n object-fit: cover; height=\"150px\" class=\"image\" \">")
        : "<p>No Image Provided</p>", "\n    <p><strong>First Name:</strong> ").concat(data.firstname, "</p><br>\n    <p><strong>Last Name:</strong> ").concat(data.lastname, "</p><br>\n    <p><strong>Email:</strong> ").concat(data.email, "</p><br>\n    <p><strong>Phone Number:</strong> ").concat(data.number, "</p><br>\n    <p><strong>Location:</strong> ").concat(data.location, "</p><br>\n    <p><strong>Education:</strong> ").concat(data.Education, "</p><br>\n    <p><strong>Skills:</strong> ").concat(data.Skills, "</p><br>\n    <p><strong>Experience:</strong> ").concat(data.Experience, "</p><br>\n    <button id=\"editresume\">Edit Resume</button><br>\n  ");
}
if (resumeform && resumeoutput) {
    resumeform.addEventListener("submit", function (event) {
        event.preventDefault();
        var firstname = document.getElementById("firstname")
            .value;
        var lastname = document.getElementById("lastname")
            .value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number")
            .value;
        var location = document.getElementById("location")
            .value;
        var Education = document.getElementById("Education")
            .value;
        var Skills = document.getElementById("Skills")
            .value;
        var Experience = document.getElementById("Experience").value;
        var imageInput = document.getElementById("image");
        if (imageInput.files && imageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var image = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                resumeoutput.innerHTML = generateResume({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    number: number,
                    location: location,
                    image: image,
                    Education: Education,
                    Skills: Skills,
                    Experience: Experience,
                });
                editButton({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    number: number,
                    location: location,
                    Education: Education,
                    Skills: Skills,
                    Experience: Experience,
                });
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
        else {
            resumeoutput.innerHTML = generateResume({
                firstname: firstname,
                lastname: lastname,
                email: email,
                number: number,
                location: location,
                image: "",
                Education: Education,
                Skills: Skills,
                Experience: Experience,
            });
            editButton({
                firstname: firstname,
                lastname: lastname,
                email: email,
                number: number,
                location: location,
                Education: Education,
                Skills: Skills,
                Experience: Experience,
            });
        }
    });
}
else {
    console.error("Form or output div not found in the DOM");
}
function editButton(data) {
    var editButton = document.getElementById("editresume");
    if (editButton) {
        editButton.addEventListener("click", function () {
            document.getElementById("firstname").value =
                data.firstname;
            document.getElementById("lastname").value =
                data.lastname;
            document.getElementById("email").value = data.email;
            document.getElementById("number").value =
                data.number;
            document.getElementById("location").value =
                data.location;
            document.getElementById("Education").value =
                data.Education;
            document.getElementById("Skills").value =
                data.Skills;
            document.getElementById("Experience").value =
                data.Experience;
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}
