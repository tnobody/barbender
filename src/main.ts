import { dispatch, workingWeightChanged } from "./state";
import "./style.css";

const fix100vh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("resize", fix100vh);
fix100vh();

dispatch(workingWeightChanged(35));
