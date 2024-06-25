const itemInput = document.querySelector(".item-input");
const caloryInput = document.querySelector(".calorie-input");
const addBtn = document.querySelector("button");
const result = document.querySelector("p");

let calorieCount = 0;

const calculateCalories = () => {
  let count = Number(caloryInput.value);
  calorieCount = calorieCount + count;

  result.innerHTML = "Your Calories Count is:" + calorieCount + "kcal";

  itemInput.value = "";
  caloryInput.value = "";
};

addBtn.addEventListener("click", calculateCalories);
