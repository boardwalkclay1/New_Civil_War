/* DATA EXPORT + IMPORT */

document.getElementById("exportBtn").onclick = () => {
  const data = {
    role: Storage.load("role"),
    bestMile: Storage.load("bestMile"),
    runHistory: Storage.load("runHistory"),
    badges: Storage.load("badges")
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "civil_war_app_data.json";
  link.click();
};

document.getElementById("importBtn").onclick = () => {
  const file = document.getElementById("importFile").files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    const data = JSON.parse(e.target.result);

    Storage.save("role", data.role);
    Storage.save("bestMile", data.bestMile);
    Storage.save("runHistory", data.runHistory);
    Storage.save("badges", data.badges);

    alert("Data imported successfully.");
  };

  reader.readAsText(file);
};
