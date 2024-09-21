const titles = ["DEVELOPER", "STUDENT", "DESIGNER", "CREATIVE", "ARTIST"]; // Add more titles as needed
    let index = 0;
    let charIndex = 0;
    const dynamicTitle = document.querySelector('.dynamic-title');

    function type() {
      if (charIndex < titles[index].length) {
        dynamicTitle.textContent += titles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200); // Speed of typing
      } else {
        setTimeout(deleteTitle, 1000); // Wait before deleting
      }
    }

    function deleteTitle() {
      if (charIndex > 0) {
        dynamicTitle.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteTitle, 200); // Speed of deleting
      } else {
        index = (index + 1) % titles.length; // Move to next title
        setTimeout(type, 500); // Wait before starting to type the next title
      }
    }

    // Scroll to top function
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Start the typing effect
    type();

    // Countdown Function
    function startCountdown(target) {
      let count = 0; // Start from 0
      const countDisplay = document.getElementById('experience-count');

      const interval = setInterval(() => {
        if (count < target) {
          count++;
          countDisplay.textContent = count; // Update the displayed number
        } else {
          clearInterval(interval); // Stop the interval when target is reached
        }
      }, 300); // Adjust the speed of the countdown (milliseconds)
    }

    // Start the countdown when the page loads
    window.onload = () => {
      startCountdown(2); // Set the target number to 22
    };

    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll("section");

      const observerOptions = {
        root: null,
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        observer.observe(section);
      });
    });

    (function() {
    emailjs.init("SPsjUTZB1mYwRFPYO"); // Replace with your EmailJS user ID
})();

document.querySelector('.estimate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm("service_m0i9m7m", "template_whpewod", this)
        .then(function() {
            swal("Success!", "Message sent successfully!", "success");
        }, function(error) {
            swal("Error!", "Failed to send the message. Please try again.", "error");
        });
});