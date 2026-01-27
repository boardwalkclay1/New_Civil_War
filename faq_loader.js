/* FAQ LOADER */

document.addEventListener("DOMContentLoaded", () => {
  const faqs = [
    {
      q: "How does the role system work?",
      a: "Your answers determine which of the 15 civic roles fits you best."
    },
    {
      q: "Is my data private?",
      a: "Yes. Everything is stored locally on your device only."
    },
    {
      q: "Do I need internet?",
      a: "No. The app is fully offline after first load."
    },
    {
      q: "What are badges?",
      a: "Badges are earned by passing math and science tests."
    }
  ];

  const container = document.getElementById("faqList");
  if (!container) return;

  faqs.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <h3>${item.q}</h3>
      <p>${item.a}</p>
    `;
    container.appendChild(div);
  });
});
