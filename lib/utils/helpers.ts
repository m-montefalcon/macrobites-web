import { Macros } from "./types/feed/types";

export const getRatios = (macros: Macros) => {
  const proteinCalories = macros.protein * 4;
  const carbsCalories = macros.carbs * 4;
  const fatCalories = macros.fat * 9;

  const total =
    macros.calories || proteinCalories + carbsCalories + fatCalories;

  return {
    protein: proteinCalories / total,
    carbs: carbsCalories / total,
    fat: fatCalories / total,
  };
};

export const isGoodProteinRatio = (macros: Macros): boolean => {
  const { protein } = getRatios(macros);
  return protein >= 0.2;
};

export const isGoodCarbsRatio = (macros: Macros): boolean => {
  const { carbs } = getRatios(macros);
  return carbs >= 0.4 && carbs <= 0.6;
};

export const isGoodFatRatio = (macros: Macros): boolean => {
  const { fat } = getRatios(macros);
  return fat >= 0.2 && fat <= 0.35;
};
