const $ = document.querySelector.bind(document);
const username = localStorage.getItem("user");

$("#navigation").onclick = (e) => {
  if (e.target.closest(".nav-item")) {
    switch (e.target.id) {
      case "home":
        console.log("Home Dispatch");
        window.location.href = "../mainpage/main.html";
        break;
      case "login": {
        console.log("and");
        if (username) {
          const confirmLogout = confirm("Do you want to logout?");
          if (confirmLogout) window.location.href = "../auth/login.html";
        } else {
          window.location.href = "../auth/login.html";
        }
      }
      default:
        break;
    }
  }
  if (e.target.closest(".nav-logo")) {
    window.location.href = "../mainpage/main.html";
  }
};

if (username) {
  $("#login").innerHTML = username;
}
