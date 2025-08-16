// Navigation and Section Switching
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.btn');

// Function to show a section
function showSection(sectionId){
  sections.forEach(sec => {
    sec.classList.remove('active');
    sec.classList.add('hidden');
  });

  const activeSec = document.getElementById(sectionId);
  activeSec.classList.remove('hidden');
  activeSec.classList.add('active');

  // Update active nav link
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`nav a[data-section="${sectionId}"]`);
  if(activeLink) activeLink.classList.add('active');

  // Scroll smoothly
  activeSec.scrollIntoView({ behavior: 'smooth' });
}

// Nav links click
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    showSection(sectionId);
  });
});

// Button clicks
sectionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const sectionId = btn.getAttribute('data-section');
    showSection(sectionId);
  });
});

// Show home by default
showSection('home');

// Contact Form Logic
const contactBtn = document.getElementById('contact-btn');
const contactContainer = document.getElementById('contact-container');

contactBtn.addEventListener('click', () => {
  if (!contactContainer.hasChildNodes()) {
    contactContainer.innerHTML = `
      <form action="https://formsubmit.co/shreyavnadiger@gmail.com" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" required></textarea><br><br>

        <button type="submit">Send Message</button>
      </form>
    `;
    contactBtn.textContent = "Hide Contact Form";
  } else {
    contactContainer.innerHTML = '';
    contactBtn.textContent = "Show Contact Form";
  }
});
const spiritImg = document.getElementById("spirit-img");

// Swap to smiling GIF on hover
spiritImg.addEventListener("mouseenter", () => {
  spiritImg.src = "shreya_spirit_smile.gif";
});

// Swap back to normal on mouse leave
spiritImg.addEventListener("mouseleave", () => {
  spiritImg.src = "shreya_spirit.png";
});