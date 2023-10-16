export interface Operation {
  type: OperationType;
  value: string;
}

export enum OperationType {
  NUMBER,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  ADD,
  CLEAR,
  RESULT,
}
