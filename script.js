let deathCount = 0;

window.addEventListener('onEventReceived', function (obj) {
  const { listener, event } = obj.detail;
  if (listener === 'message') {
    const msg = event.data.text.trim();
    const isMod = event.data.tags.mod === '1' || event.data.tags.badges?.moderator;

    if (isMod && msg.startsWith('!death')) {
      const parts = msg.split(' ');
      const newCount = parseInt(parts[1]);
      if (!isNaN(newCount)) {
        deathCount = newCount;
        document.getElementById('counter').textContent = `DEATHS: ${deathCount}`;
      }
    }
  }
});
