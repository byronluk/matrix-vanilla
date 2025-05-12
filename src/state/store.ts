import type { AppState, CellCoord, Matrix } from "../types";

/**
 * Initializes the application state
 * @returns Initial state object
 */
export function initState(): AppState {
  // TODO implement state initialization
  return {
    matrixA: [],
    matrixB: [],
    result: null,
    selectedCell: null,
    calculationPath: [],
  };
}

/**
 * Updates the state with new matrix values
 * @param state - Current state
 * @param matrixId - ID of matrix to update
 * @param newMatrix - New matrix values
 * @returns Updated state
 */
export function updateMatrix(
  state: AppState,
  matrixId: string,
  newMatrix: Matrix
): AppState {
  // TODO implement matrix update
  return state;
}

/**
 * Updates the selected cell in the state
 * @param state - Current state
 * @param cell - Cell coordinates
 * @returns Updated state
 */
export function updateSelectedCell(state: AppState, cell: CellCoord): AppState {
  // TODO implement selected cell update
  return state;
}
