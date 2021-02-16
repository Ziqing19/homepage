function showContact() {
  let form = document.getElementsByClassName("contact-form")[0];
  form.style.display = "block";
  window.setTimeout(function () {
    form.style.opacity = 1;
    form.style.transform = "scale(1)";
  }, 0);
}

function hideContact() {
  let form = document.getElementsByClassName("contact-form")[0];
  form.style.display = "none";
  form.style.transform = "scale(0)";
  window.setTimeout(function () {
    form.style.opacity = 0;
  }, 700);
}