import "./style.css";

const state = () => ({
  availablePlates: [1.25, 2.5, 5, 10, 15, 20, 25],
  workingWeight: 40,
  barWeight: 20,
  get requiredPlates() {
    return [1, 2, 3];
  },
});
