function getElementWidth(content, padding, border) {
    // Функція для отримання числового значення з рядка формату "Npx"
    function parsePx(value) {
    return parseFloat(value);
    }

    // Отримання числових значень для параметрів
    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding);
    const borderWidth = parsePx(border);

    // Розрахунок загальної ширини
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    // Повернення загальної ширини
    return totalWidth;
}

  // Приклад виклику функції
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
