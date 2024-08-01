document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = this.querySelector("#name");
      const emailInput = this.querySelector("#email");
      const interestSelect = this.querySelector("#interest");

      let isValid = true;

      // Validasi nama
      if (nameInput.value.trim() === "") {
        showError(nameInput, "Nama harus diisi");
        isValid = false;
      } else {
        removeError(nameInput);
      }

      // Validasi email
      if (emailInput.value.trim() === "") {
        showError(emailInput, "Email harus diisi");
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Format email tidak valid");
        isValid = false;
      } else {
        removeError(emailInput);
      }

      // Validasi pilihan interest
      if (interestSelect.value === "") {
        showError(interestSelect, "Silakan pilih opsi yang tersedia");
        isValid = false;
      } else {
        removeError(interestSelect);
      }

      if (isValid) {
        // Kirim form jika valid
        alert(
          "Form berhasil dikirim. Sales akan menghubungi Anda dalam 1x24 jam."
        );
        this.reset();
      }
    });
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay =
      formControl.querySelector(".error-message") ||
      document.createElement("div");
    errorDisplay.className = "error-message";
    errorDisplay.textContent = message;
    if (!formControl.querySelector(".error-message")) {
      formControl.appendChild(errorDisplay);
    }
    input.classList.add("error-input");
  }

  function removeError(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-message");
    if (errorDisplay) {
      formControl.removeChild(errorDisplay);
    }
    input.classList.remove("error-input");
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
