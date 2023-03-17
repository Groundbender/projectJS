import { animate } from "./helpers";

const calc = (price = 1000) => {
  const calcBlock = document.getElementById("calc");
  if (!calcBlock) {
    return;
  }

  const calcType = document.getElementById("calc-type");
  const calcInput = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");
  const calcTypeMaterial = document.getElementById("calc-type-material");

  // console.log(calcType);
  // console.log(calcInput);
  // console.log(calcTotal);
  // console.log(calcTypeMaterial);

  calcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcInputValue = calcInput.value;

    let calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value || 1;
    let totalValue = 0;

    if (calcType.value && calcInput.value) {
      totalValue =
        price * calcInputValue * calcTypeValue * calcTypeMaterialValue;
    } else {
      totalValue = 0;
    }
    // total.value = totalValue;
    return totalValue;
  };

  const animationCheck = () => {
    let prevValue = +total.value;
    let totalValue = countCalc();
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        if (prevValue > 0) {
          total.value =
            prevValue + Math.round((totalValue - prevValue) * progress);
        } else {
          total.value = Math.round(totalValue * progress);
        }
      },
    });
  };
  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcInput ||
      e.target === calcTypeMaterial
    ) {
      animationCheck();
    }
  });
};

export default calc;
