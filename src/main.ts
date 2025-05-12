// To run the app:
// npm install
// npm run dev

import "./style.css";
import { initState } from "./state/store";
import { createInputMatrix } from "./ui/matrix";
import { setupInteractions } from "./ui/interactions";

function init(): void {
  // TODO implement initialization logic
  const state = initState();
  const matrixA = createInputMatrix("matrix-a");
  const matrixB = createInputMatrix("matrix-b");
  setupInteractions(state);
}

// Start the application
document.addEventListener("DOMContentLoaded", init);
