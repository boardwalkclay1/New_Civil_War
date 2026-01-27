/* SHARE CARD GENERATOR */

document.addEventListener("DOMContentLoaded", () => {
  const role = Storage.load("role", null);
  const best = Storage.load("bestMile", null);

  if (!role) return;

  document.getElementById("cardRoleName").textContent = role.name;
  document.getElementById("cardRoleNumber").textContent = "#" + role.number;
  document.getElementById("cardCategory").textContent = role.category;
  document.getElementById("cardDescription").textContent = role.description;
  document.getElementById("cardBestTime").textContent =
    best ? "Best Mile: " + best + " sec" : "Best Mile: —";

  // Save card as image
  document.getElementById("saveCardBtn").onclick = () => {
    html2canvas(document.getElementById("shareCard")).then(canvas => {
      const link = document.createElement("a");
      link.download = "role_card.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
});
