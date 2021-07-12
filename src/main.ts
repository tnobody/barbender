import { dispatch, workingWeightChanged } from "./state";
// @ts-ignore
import { registerSW } from 'virtual:pwa-register'
import "./style.css";

const fix100vh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

registerSW({})

window.addEventListener("resize", fix100vh);
fix100vh();

dispatch(workingWeightChanged(35));
