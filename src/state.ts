import { render } from "lit-html";
import { findPlates } from "./find-plates";
import { stateMachine } from "./state-machine";
import { UI } from "./ui";

export const DefaultState = {
  availablePlates: [1.25, 2.5, 5, 10, 15, 20, 25],
  workingWeight: 40,
  barWeight: 20,
  requiredPlates: [] as number[],
};

export type State = typeof DefaultState;

export const workingWeightChanged = (value: number) => ({
  type: "workingWeightChanged" as const,
  data: value,
});

export const barWeightChanged = (value: number) => ({
  type: "barWeightChanged" as const,
  data: value,
});

type Actions =
  | ReturnType<typeof workingWeightChanged>
  | ReturnType<typeof barWeightChanged>;

export const calculateRequiredPlates = (state: State) => {
  const requiredPlates = findPlates(
    (state.workingWeight - state.barWeight) / 2,
    state.availablePlates
  );
  return { ...state, requiredPlates };
};

export const dispatch = stateMachine<Actions, State>(
  DefaultState,
  (state, action) => {
    switch (action.type) {
      case "workingWeightChanged": {
        return calculateRequiredPlates({
          ...state,
          workingWeight: action.data,
        });
      }
      case "barWeightChanged": {
        return calculateRequiredPlates({ ...state, barWeight: action.data });
      }
    }
    return state;
  }
)((state) => {
  render(UI(state), document.getElementById("app")!);
});
