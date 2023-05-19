export type SqlValue = string | number | undefined | null;

export interface SqlValueMap {
  [columnName: string]: SqlValue;
}
