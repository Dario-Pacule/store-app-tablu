import { IDate } from "./general";

export interface ApiReturn<T = unknown> {
  message: string;
  count?: number;
  data?: T;
}

export interface DbAttr<ID = string> {
  id: ID;
  createdAt?: IDate;
  updatedAt?: IDate;
}

export type DbAttrKeys = keyof DbAttr;

export interface ActionReturn<DATA, ERROR = string> {
  data: DATA | null;
  error: ERROR | null;
}
