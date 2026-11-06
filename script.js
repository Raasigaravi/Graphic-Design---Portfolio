// Contact details
const CONTACT = {
  email: "raasigaravi21@gmail.com",
  linkedin: "https://www.linkedin.com/in/raasigaravi-r",
  github: "https://github.com/Raasigaravi"
};

const emailLink = document.getElementById("emailLink");
const emailText = document.getElementById("emailText");
const linkedinLink = document.getElementById("linkedinLink");
const linkedinText = document.getElementById("linkedinText");
const githubLink = document.getElementById("githubLink");
const githubText = document.getElementById("githubText");

{
  emailLink.href = `mailto:${CONTACT.email}`;
  emailText.textContent = CONTACT.email;
}
{
  linkedinLink.href = CONTACT.linkedin;
  const slug = CONTACT.linkedin.split("/").filter(Boolean).pop();
  linkedinText.textContent = `in/${slug}`;
}
githubLink.href = CONTACT.github;
githubText.textContent = "@Raasigaravi";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById("progress").style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
});
