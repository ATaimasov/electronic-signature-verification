const verificationItem = document.querySelectorAll(".verification-item");

verificationItem.forEach((verification) => {
  const button = verification.querySelector(".verification-item__btn");
  button.addEventListener("click", (event) => buttonEvent(verification, event));
});

let isVerifying = false;

function buttonEvent(verification, event) {
  event.preventDefault();
  verificationLogic(verification);
}

async function verificationLogic(verification) {
  if (isVerifying) {
    return;
  }
  isVerifying = true;

  const items = verification.querySelectorAll(".verification-item__item");
  const output = verification.querySelector(".verification-item__output");

  items.forEach((item) => {
    item.classList.remove(
      "verification-item__item--success",
      "verification-item__item--fail",
      "verification-item__item--loading",
    );
  });
  output.classList.remove(
    "verification-item__output--success",
    "verification-item__output--fail",
  );
  output.textContent = "";

  try {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      item.classList.add("verification-item__item--loading");

      // Имитируем проверку (1-5 секунд)
      const delay = Math.random() * (5000 - 1000) + 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));

      item.classList.remove("verification-item__item--loading");

      // Случайный результат
      const success = Math.random() < 0.9; // 90% - вероятность успеха
      console.log(success);

      if (success) {
        item.classList.add("verification-item__item--success");
      } else {
        throw new Error("Ошибка проверки. Попробуйте еще раз.");
      }
    }

    output.textContent = `Общество с ограниченной ответственностью\“РП - Строй\”, Общество с ограниченной ответственностью\“РП - Строй\”
        (Выдан: Федеральная налоговая служба)`;
    output.classList.add("verification-item__output--success");
  } catch (error) {
    output.textContent = error.message;
    output.classList.add("verification-item__output--fail");
  } finally {
    isVerifying = false;
  }
}
