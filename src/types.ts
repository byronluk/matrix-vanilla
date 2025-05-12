export type Matrix = number[][];
export type CellCoord = { row: number; col: number };

export interface AppState {
  matrixA: Matrix;
  matrixB: Matrix;
  result: Matrix | null;
  selectedCell: CellCoord | null;
  calculationPath: CellCoord[];
}

export interface MatrixContainer {
  element: HTMLElement;
  matrix: Matrix;
}
