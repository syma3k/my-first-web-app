// ここからコードを書いてください
const setupConverter = () => {
  const form = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const selectFrom = document.querySelector(".converter-from");
  const selectTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];
  lengthUnit.forEach((unit) => {
    const option = new Option(unit.name, unit.base);
    selectFrom.add(option);
  });
  lengthUnit.forEach((unit) => {
    const option = new Option(unit.name, unit.base);
    selectTo.add(option);
  });
  selectFrom.selectedIndex = 0;
  selectTo.selectedIndex = 1;

  const converter = () => {
    const inputValue = parseFloat(converterInput.value);
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    } else {
      const unitBaseFrom = selectFrom.value;
      const unitBaseTo = selectTo.value;
      const selectedOptionFrom = selectFrom.options[selectFrom.selectedIndex];
      const selectedOptionTo = selectTo.options[selectTo.selectedIndex];
      const resultValue = (inputValue * unitBaseFrom) / unitBaseTo;
      converterResult.textContent = `${inputValue} ${selectedOptionFrom.text} = ${resultValue.toFixed(3)} ${selectedOptionTo.text}`;
    }
  };
  form.addEventListener("input", converter);
  converter();
};

export default setupConverter;
