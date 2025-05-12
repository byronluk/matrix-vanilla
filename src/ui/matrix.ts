import type { Matrix, MatrixContainer } from "../types";

/**
 * Creates an input matrix UI component
 * @param containerId - ID of the container element
 * @returns The matrix container element and its matrix
 */
export function createInputMatrix(containerId: string): MatrixContainer {
  // TODO implement input matrix creation
  return {
    element: document.createElement("div"),
    matrix: [],
  };
}

/**
 * Renders a matrix in the specified container
 * @param matrix - Matrix to render
 * @param container - Container element
 */
export function renderMatrix(matrix: Matrix, container: HTMLElement): void {
  // TODO implement matrix rendering
}

/**
 * Updates a specific cell in the matrix
 * @param row - Row index
 * @param col - Column index
 * @param value - New value
 * @param container - Matrix container
 */
export function updateMatrixCell(
  row: number,
  col: number,
  value: number,
  container: HTMLElement
): void {
  // TODO implement cell update
}
