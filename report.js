const form = document.getElementById("counsellorForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const anonymous = document.getElementById("anonymous").checked;

  if (!message.trim()) {
    confirmation.style.color = "red";
    confirmation.textContent = "Please type a message before sending.";
    return;
  }

  // Simulate sending message
  let displayName = anonymous ? "Anonymous" : name || "Anonymous";
  console.log("Message sent by:", displayName);
  console.log("Email:", email || "Not provided");
  console.log("Message:", message);

  confirmation.style.color = "green";
  confirmation.textContent = "Your message has been sent! Thank you.";

  // Reset form
  form.reset();
});
