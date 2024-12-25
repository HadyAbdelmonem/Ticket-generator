function myticket() {
    let avatarFile = document.getElementById("avatar-upload").files[0];
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let github = document.getElementById("githubUsername").value;
  
    if (avatarFile) {
      let reader = new FileReader();
      reader.onload = function (e) {
        let avatar = e.target.result; // This will contain the base64 string of the image
  
        let user = {
          avatar: avatar, // Store the base64 string in local storage
          name: name,
          email: email,
          github: github,
        };
        localStorage.setItem("userdata", JSON.stringify(user));
      };
      reader.readAsDataURL(avatarFile); // Convert the file to a base64 string
    } else {
      let user = {
        avatar: null, // No file uploaded, set avatar to null
        name: name,
        email: email,
        github: github,
      };
      localStorage.setItem("userdata", JSON.stringify(user));
    }
  }

let Avatar = document.getElementById('avatar-upload');
Avatar.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const maxFileSize = 500 * 1024; // 500 KB

    if (file) {
        if (file.size > maxFileSize) {
            alert("File size exceeds the 500KB limit.");
            event.target.value = ""; // Clear the input
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("preview");
            preview.src = e.target.result;
            preview.style.display = "block"; // Show the preview
        };
        reader.readAsDataURL(file);
    }
});
