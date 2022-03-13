if (localStorage.getItem("user")) {
  localStorage.removeItem("user");
}
document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  if (e.target.username.value.trim()) {
    localStorage.setItem("user", e.target.username.value);
    window.location.href = "../mainpage/main.html";
  } else {
    alert("Nhập username");
  }
};

document.querySelector(".login-logo").onclick = () => {
  window.location.href = "../mainpage/main.html";
};
