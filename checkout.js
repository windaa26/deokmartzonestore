function handleSubmit(e) {
  e.preventDefault();

  const button = document.querySelector("button[type='submit']");
  button.disabled = true;
  button.textContent = "Memproses...";

  setTimeout(() => {
    window.location.href = "success.html";
  }, 2000);
}
