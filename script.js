const button = document.querySelector("#copy-brief");
const status = document.querySelector("#copy-status");
const brief = "Привет! Нужен сайт. Задача: … Аудитория: … Срок: … Референсы: …";

button?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(brief);
    button.textContent = "✓ БРИФ СКОПИРОВАН";
    status.textContent = "Шаблон сообщения находится в буфере обмена.";
    window.setTimeout(() => {
      button.textContent = "СКОПИРОВАТЬ БРИФ";
      status.textContent = "";
    }, 2400);
  } catch {
    status.textContent = "Не удалось скопировать. Разрешите доступ к буферу обмена.";
  }
});
