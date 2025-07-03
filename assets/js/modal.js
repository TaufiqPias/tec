// Modal functionality
$(document).ready(function () {
  // Get all "Discover More" buttons
  var discoverButtons = $(".discover-more");

  // Add click event to each button
  discoverButtons.click(function (e) {
    e.preventDefault();
    var modalId = $(this).data("modal");
    $("#" + modalId).css("display", "block");
  });

  // Get all close buttons
  var closeButtons = $(".close");

  // Add click event to each close button
  closeButtons.click(function () {
    $(this).closest(".modal").css("display", "none");
  });

  // Close modal when clicking outside of it
  $(window).click(function (e) {
    if ($(e.target).hasClass("modal")) {
      $(e.target).css("display", "none");
    }
  });

  // Close modal with ESC key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".modal").css("display", "none");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  const modal = document.getElementById("registrationModal");

  // Get all buttons that should open the modal
  const registerBtns = document.querySelectorAll(
    'a[href="#"], .main-button a[href="#our-classes"], .main-button a[href="#features"]'
  );

  // Get the <span> element that closes the modal
  const span = document.querySelector("#registrationModal .close");

  // Function to open modal
  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }

  // Add click events to all trigger buttons
  registerBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Check if the button is one of our registration triggers
      const btnText = btn.textContent.trim().toLowerCase();
      if (
        btnText.includes("register") ||
        btnText.includes("join a batch today") ||
        btnText.includes("join us today")
      ) {
        e.preventDefault();
        openModal();
      }
    });
  });

  // Close modal when clicking on <span> (x)
  span.addEventListener("click", closeModal);

  // Close modal when clicking outside of it
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  // Form submission
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = {
        fullName: document.getElementById("fullName").value,
        class: document.getElementById("class").value,
        institute: document.getElementById("institute").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
      };

      // Here you would typically send the data to your server
      console.log("Form submitted:", formData);

      // Show success message (you can customize this)
      alert("Thank you for registering! We will contact you soon.");

      // Close the modal
      closeModal();

      // Reset the form
      registrationForm.reset();
    });
  }
});
