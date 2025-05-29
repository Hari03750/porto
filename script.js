const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    document.documentElement.style.setProperty('--bg', '#ffffff');
    document.documentElement.style.setProperty('--text', '#000000');
  } else {
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--text', '#ffffff');
  }
});
