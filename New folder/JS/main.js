//show or hide password button script
let password = document.getElementById('password-visibility');
function visibility() {
  let password = document.getElementById('password-visibility');
  let password_field = document.getElementById('password');
  if (password.classList.contains('show')) {
    password.classList.remove('show');
    password.classList.add('hide');
    password.innerHTML = "Hide";
    password_field.setAttribute("type", "text");
  } else {
    password.classList.remove('hide');
    password.classList.add('show');
    password.innerHTML = "Show";
    password_field.setAttribute("type", "password");
  }
}
password.addEventListener("click", visibility);

//accordion drop-down menu list
var small_screen = window.matchMedia("(max-aspect-ratio:17/20) and (max-width:800px)");

let button = document.getElementsByClassName('top-drop');
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } else {
      list.style.maxHeight = list.scrollHeight + "px";
    }
  });
}