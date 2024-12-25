// let userdata = JSON.parse(localStorage.getItem("userdata"));

// document.querySelector(".highlight").innerHTML = userdata.name;
// document.querySelector(".user-name").innerHTML = userdata.name;
// document.querySelector(".email").innerHTML = userdata.email;
// // document.querySelector(".avatar").innerHTML = `<img src="${userdata.avatar}" alt="${userdata.name}" class="avatar">>`;
// if (userdata.avatar){
//     document.querySelector(".avatar").innerHTML = `<img src="${userdata.avatar}" alt="${userdata.name}" class="avatar">`;
// }else{
//     alert("Please select")
// }
// document.querySelector(".user-handle").innerHTML = `@${userdata.github}`;




let userdata = JSON.parse(localStorage.getItem("userdata"));
console.log(userdata);

// Populate user information
document.querySelector(".highlight").innerHTML = userdata.name;
document.querySelector(".user-name").innerHTML = userdata.name;
document.querySelector(".email").innerHTML = userdata.email;
document.querySelector(".user-handle").innerHTML = `@${userdata.github}`;

// Display the avatar
if (userdata.avatar) {
  document.querySelector(".avatar").src = userdata.avatar; // Set the src attribute directly
  document.querySelector(".avatar").alt = userdata.name; // Set the alt attribute for accessibility
} else {
  alert("Please select an avatar");
}