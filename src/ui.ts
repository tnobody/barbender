import { html, nothing } from "lit-html";
import {
  barWeightChanged,
  dispatch,
  State,
  workingWeightChanged,
} from "./state";
import { styleMap } from "lit-html/directives/style-map.js";

export const UI = (state: State) => {
  const onWeightChange = {
    handleEvent(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) {
        dispatch(workingWeightChanged(Number(e.target.value)));
      }
    },
    capture: true,
  };
  const onBarWeightChange = {
    handleEvent(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) {
        dispatch(barWeightChanged(Number(e.target.value)));
      }
    },
    capture: true,
  };
  const maxPlateWeight = Math.max(...state.availablePlates);
  const activeWeight =
    state.requiredPlates.reduce((a, b) => a + b) * 2 + state.barWeight;
  const missing = Math.abs(activeWeight - state.workingWeight);

  return html`<main
    class="h-screen flex flex-col container mx-auto space-y-2 pt-2 text-white"
  >
    <header>
      <h1 class="uppercase text-center text-4xl font-bold">
        <span class="text-gray-700">Bar</span
        ><span class="text-green-700">Bender</span>
      </h1>
    </header>
    <div class="h-12 flex justify-center">
      <input
        @keyup=${onBarWeightChange}
        type="number"
        value=${state.barWeight}
        class="w-10 bg-gray-700 text-white text-center"
      />
    </div>
    <ul class="space-y-2 flex flex-col items-center">
      ${[...state.requiredPlates]
        .sort((a, b) => a - b)
        .map(
          (pw) => html`
            <li
              style=${styleMap({
                width: `calc(${pw} / ${maxPlateWeight} * 50% + 50%)`,
              })}
              class="text-center rounded-sm bg-green-700 text-white p-2"
            >
              ${pw}
            </li>
          `
        )}
    </ul>
    <div class="flex-1 flex justify-center">
      <div class="w-10 bg-gray-700"></div>
    </div>
    ${missing !== 0
      ? html`<div class="text-red-500 text-center">
          Active Weight: ${activeWeight} (missing ${missing})
        </div>`
      : nothing}
    <form
      class="font-bold px-2 py-4 transition-colors duration-200 focus-within:bg-gray-800 hover:bg-gray-800 flex flex-row items-center space-x-2 bg-gray-900"
    >
      <label for="working-weight" class="text-center text-gray-400"
        >Working Weight</label
      >
      <input
        id="working-weight"
        autofocus
        @keyup=${onWeightChange}
        class="text-2xl text-right flex-1 w-full border-none bg-transparent focus:outline-none  text-white"
        type="number"
        value=${state.workingWeight}
      />
      <span class="text-gray-400">kg</span>
    </form>
  </main>`;
};
