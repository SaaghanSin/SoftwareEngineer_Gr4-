const localStorageKey = "selectedTypes";

export const selectedTypesData = {
  selectedTypes: JSON.parse(localStorage.getItem(localStorageKey)) || [
    1, 2, 3, 4, 5,
  ],
};
export const selectedTypesDataArr = [1, 2, 3];
export const saveSelectedTypes = (selectedTypes) => {
  selectedTypesData.selectedTypes = selectedTypes;
  localStorage.setItem(localStorageKey, JSON.stringify(selectedTypes));
};
