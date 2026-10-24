CyberDeck.addPage({
  id: "loadout",
  title: "Loadout",
  render(el) {
    const sel = CyberDeck.getSelections();
    const cap = CyberDeck.getCapacity();
    const installed = Object.entries(sel).filter(([, item]) => item);

    const pre = document.createElement("pre");
    pre.style.whiteSpace = "pre-wrap";
    let totalCost = 0;
    const lines = installed.map(([blockId, item]) => {
      totalCost += item.cost || 0;
      return "[" + item.group.toUpperCase() + "] " + item.title +
        "  cap " + item.capacity + "  $" + item.cost;
    });
    if (!lines.length) lines.push("Nothing installed yet.");
    lines.push("", "Capacity: " + cap.used + " / " + cap.cap, "Total cost: $" + totalCost);
    pre.textContent = lines.join("\n");
    el.appendChild(pre);
  }
});
