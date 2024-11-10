const resumeform = document.getElementById(
  "resumeform"
) as HTMLFormElement | null;
const resumeoutput = document.getElementById(
  "resumeoutput"
) as HTMLDivElement | null;

function generateResume(data: {
  firstname: string;
  lastname: string;
  email: string;
  number: string;
  location: string;
  image: string;
  Education: string;
  Skills: string;
  Experience: string;
}) {
  return `
    <h2><b>Congrats your First Generated!</b></h2>
    
   ${
     data.image
       ? `<img src="${data.image}" alt="Profile Image" style="width="150px"  border: 2px solid black;
 object-fit: cover; height="150px" class="image" ">`
       : "<p>No Image Provided</p>"
   }
    <p><strong>First Name:</strong> ${data.firstname}</p><br>
    <p><strong>Last Name:</strong> ${data.lastname}</p><br>
    <p><strong>Email:</strong> ${data.email}</p><br>
    <p><strong>Phone Number:</strong> ${data.number}</p><br>
    <p><strong>Location:</strong> ${data.location}</p><br>
    <p><strong>Education:</strong> ${data.Education}</p><br>
    <p><strong>Skills:</strong> ${data.Skills}</p><br>
    <p><strong>Experience:</strong> ${data.Experience}</p><br>
    <button id="editresume">Edit Resume</button><br>
  `;
}

if (resumeform && resumeoutput) {
  resumeform.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstname = (document.getElementById("firstname") as HTMLInputElement)
      .value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const number = (document.getElementById("number") as HTMLInputElement)
      .value;
    const location = (document.getElementById("location") as HTMLInputElement)
      .value;
    const Education = (document.getElementById("Education") as HTMLInputElement)
      .value;
    const Skills = (document.getElementById("Skills") as HTMLInputElement)
      .value;
    const Experience = (
      document.getElementById("Experience") as HTMLInputElement
    ).value;
    const imageInput = document.getElementById("image") as HTMLInputElement;

    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const image = e.target?.result as string;
        resumeoutput.innerHTML = generateResume({
          firstname,
          lastname,
          email,
          number,
          location,
          image,
          Education,
          Skills,
          Experience,
        });
        editButton({
          firstname,
          lastname,
          email,
          number,
          location,
          Education,
          Skills,
          Experience,
        });
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      resumeoutput.innerHTML = generateResume({
        firstname,
        lastname,
        email,
        number,
        location,
        image: "",
        Education,
        Skills,
        Experience,
      });
      editButton({
        firstname,
        lastname,
        email,
        number,
        location,
        Education,
        Skills,
        Experience,
      });
    }
  });
} else {
  console.error("Form or output div not found in the DOM");
}

function editButton(data: {
  firstname: string;
  lastname: string;
  email: string;
  number: string;
  location: string;
  Education: string;
  Skills: string;
  Experience: string;
}) {
  const editButton = document.getElementById("editresume") as HTMLButtonElement;
  if (editButton) {
    editButton.addEventListener("click", () => {
      (document.getElementById("firstname") as HTMLInputElement).value =
        data.firstname;
      (document.getElementById("lastname") as HTMLInputElement).value =
        data.lastname;
      (document.getElementById("email") as HTMLInputElement).value = data.email;
      (document.getElementById("number") as HTMLInputElement).value =
        data.number;
      (document.getElementById("location") as HTMLInputElement).value =
        data.location;
      (document.getElementById("Education") as HTMLInputElement).value =
        data.Education;
      (document.getElementById("Skills") as HTMLInputElement).value =
        data.Skills;
      (document.getElementById("Experience") as HTMLInputElement).value =
        data.Experience;

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
